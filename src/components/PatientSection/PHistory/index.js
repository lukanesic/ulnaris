import { AnimatePresence } from 'framer-motion'
import React, { useState } from 'react'
import ExamContainer from '../ExamContainer'
import ViewExam from '../ViewExam'
import Backdrop from './../../Backdrop'

const PHistory = ({ patient }) => {
  return (
    <div className='p-history'>
      {Object.keys(patient).length === 0 && (
        <h2 className='no-patients'>
          Izaberite pacijenta za prikaz istorije pregleda!
        </h2>
      )}

      {Object.keys(patient).length !== 0 && (
        <>
          {patient.examinations
            .map((examination, index) => (
              <PHBox
                examination={examination}
                key={index}
                examIndex={index}
                patientId={patient.id}
              />
            ))
            .reverse()}
        </>
      )}
    </div>
  )
}

export default PHistory

const PHBox = ({ examination, examIndex, patientId }) => {
  const [show, setShow] = useState(false)

  return (
    <div className='p-box'>
      <h5>
        Datum Pregleda: <span>{examination.date}</span>
      </h5>
      <div className='p-box-btns'>
        <button onClick={() => setShow(!show)}>View</button>
      </div>

      <AnimatePresence exitBeforeEnter>
        {show && (
          <>
            <Backdrop open={show} setOpen={setShow} />
            <ExamContainer
              patientId={patientId}
              show={show}
              setShow={setShow}
              examIndex={examIndex}
              deleteExam
              printer
            >
              <ViewExam examination={examination} />
            </ExamContainer>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
