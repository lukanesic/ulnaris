import React from 'react'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import ExamContainer from '../ExamContainer'

import { ReactToPrint } from 'react-to-print'

const Examinations = ({ patient, show, setShow }) => {
  const { examinations } = patient

  return (
    <ExamContainer printer setShow={setShow} show={show}>
      <div className='exam-container-to-print'>
        <h2>
          Pacijent -{' '}
          <span>
            {patient.name} {patient.surname}
          </span>
        </h2>
        <h4>Celokupna istorija pregleda</h4>
        {examinations
          .map((exam, index) => (
            <div className='exam' key={index}>
              <h5>
                <span>{exam.date}</span>
              </h5>
              <p>{exam.review}</p>
            </div>
          ))
          .reverse()}
      </div>
    </ExamContainer>
  )
}

export default Examinations
