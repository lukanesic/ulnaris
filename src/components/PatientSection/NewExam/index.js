import React, { useState } from 'react'
import { motion } from 'framer-motion'

import { useDispatch } from 'react-redux'

import { AiFillPrinter, AiOutlineClose } from 'react-icons/ai'
import Button from './../../UI/Button'
import { setNewExamination } from '../../../redux/patientSlice'

import { db } from '../../../firebase'
import { doc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore'
import ExamContainer from '../ExamContainer'

const NewExam = ({ patient, add, setAdd }) => {
  const [getExam, setGetExam] = useState('')
  const [getDate, setGetDate] = useState('')

  const dispatch = useDispatch()

  const handleSubmit = async () => {
    if (getExam === '' || getDate === '') {
      return
    }

    const examinationObj = {
      review: getExam,
      date: getDate,
    }

    const patientId = patient.id

    try {
      dispatch(setNewExamination(examinationObj))
      const patientRef = doc(db, 'patients', patientId)

      const res = await updateDoc(patientRef, {
        examinations: arrayUnion(examinationObj),
      })
    } catch (error) {
      console.log(error)
    }

    setAdd(!add)
  }

  return (
    <ExamContainer show={add} setShow={setAdd}>
      <h2>
        Pacijent -{' '}
        <span>
          {patient.name} {patient.surname}
        </span>
      </h2>
      <h4>Novi pregled</h4>
      <div className='add-exam-form'>
        <div className='date'>
          <label htmlFor='date'>Datum pregleda</label>
          <input
            type='text'
            placeholder='DD.MM.YY'
            onChange={(e) => setGetDate(e.target.value)}
          />
        </div>

        <div className='new-exam'>
          <label htmlFor='texta'>Pregled</label>
          <textarea id='texta' onChange={(e) => setGetExam(e.target.value)} />
        </div>

        <button onClick={handleSubmit}>Sacuvaj pregled</button>
      </div>
    </ExamContainer>
  )
}

export default NewExam
