import { AnimatePresence } from 'framer-motion'
import React, { useState } from 'react'
import Examinations from '../Examinations'
import NewExam from '../NewExam'
import Backdrop from './../../Backdrop'

import { useDispatch } from 'react-redux'
import { motion } from 'framer-motion'

import { db } from '../../../firebase'
import { doc, deleteDoc } from 'firebase/firestore'
import {
  deletePatientFail,
  deletePatientRequest,
  deletePatientSuccess,
} from '../../../redux/patientSlice'

const PHeader = ({ patient }) => {
  const { name, jmbg, surname, phone, id } = patient

  const [showExams, setShowExams] = useState(false)
  const [addExam, setAddExam] = useState(false)
  const [deletePatient, setDeletePatient] = useState(false)

  const dispatch = useDispatch()

  const deleteHandler = async () => {
    dispatch(deletePatientRequest())

    try {
      dispatch(deletePatientSuccess(id))
      setDeletePatient(!deletePatient)
      await deleteDoc(doc(db, 'patients', id))
    } catch (error) {
      console.log(error)
      dispatch(deletePatientFail())
    }
  }

  return (
    <>
      <div className='p-header'>
        <h2>Istorija pregleda</h2>
        {Object.keys(patient).length === 0 && (
          <>
            <h4>Pacijent nije izabran</h4>
            <h5>Izaberite pacijenta za dalje informacije</h5>
          </>
        )}
        {Object.keys(patient).length !== 0 && (
          <>
            <h4>
              {name} {surname}
            </h4>
            <h5>
              JMBG: <span>{jmbg}</span>
            </h5>
            <h5>
              Telefon: <span>{phone}</span>
            </h5>

            <div className='patient-btns'>
              <button onClick={() => setAddExam(!addExam)}>Novi pregled</button>
              <button onClick={() => setShowExams(!showExams)}>
                Svi pregledi
              </button>
              {/* <button
                className={deletePatient ? 'confirm-d' : ''}
                onClick={() => setDeletePatient(!deletePatient)}
              >
                {!deletePatient && 'Izbrisite pacijenta'}
                {deletePatient && 'Povrdite brisanje'}
              </button> */}

              <div className='confirm-d'>
                <AnimatePresence exitBeforeEnter>
                  {deletePatient && (
                    <button className='confirm-del' onClick={deleteHandler}>
                      Potvrdite brisanje
                    </button>
                  )}
                  {!deletePatient && (
                    <button onClick={() => setDeletePatient(!deletePatient)}>
                      Izbrisite pacijenta
                    </button>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </>
        )}
      </div>
      <AnimatePresence exitBeforeEnter>
        {showExams && (
          <>
            <Backdrop open={showExams} setOpen={setShowExams} />
            <Examinations
              show={showExams}
              setShow={setShowExams}
              patient={patient}
            />
          </>
        )}

        {addExam && (
          <>
            <Backdrop open={addExam} setOpen={setAddExam} />
            <NewExam add={addExam} setAdd={setAddExam} patient={patient} />
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default PHeader
