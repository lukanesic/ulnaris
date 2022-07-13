import React from 'react'
import { motion } from 'framer-motion'

import { AiFillPrinter, AiOutlineClose, AiFillDelete } from 'react-icons/ai'

import { useDispatch } from 'react-redux'
import {
  deleteExamRequest,
  deleteExamSuccess,
} from '../../../redux/patientSlice'

import { db } from '../../../firebase'
import { doc, updateDoc, getDoc } from 'firebase/firestore'

const ExamContainer = ({
  show,
  setShow,
  children,
  printer,
  deleteExam,
  examIndex,
  patientId,
  handlePrint,
}) => {
  const dispatch = useDispatch()

  const deleteExamHandler = async () => {
    dispatch(deleteExamRequest())

    try {
      const examRef = doc(db, 'patients', patientId)
      const res = await getDoc(examRef)
      const newArr = res
        .data()
        .examinations.filter((exam, index) => index !== examIndex)

      await updateDoc(examRef, { examinations: newArr })

      setTimeout(() => {
        dispatch(deleteExamSuccess({ examIndex, patientId }))
      }, 1000)

      setShow(!show)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className='examinations'
    >
      <div className='exam-icons'>
        {deleteExam && (
          <AiFillDelete
            style={{ cursor: 'pointer', color: 'rgb(0, 72, 114)' }}
            onClick={() => deleteExamHandler()}
            className='icon'
          />
        )}
        {printer && (
          <AiFillPrinter
            style={{ cursor: 'pointer', color: 'rgb(0, 72, 114)' }}
            className='icon'
            onClick={handlePrint}
          />
        )}
        <AiOutlineClose
          style={{ cursor: 'pointer', color: 'rgb(0, 72, 114)' }}
          onClick={() => setShow(!show)}
          className='icon'
        />
      </div>
      {/* <div className='ulnaris-header'>
        <h1>Ulnaris - Ambulanta za rehabilitaciju</h1>
      </div> */}
      {children}
    </motion.div>
  )
}

export default ExamContainer
