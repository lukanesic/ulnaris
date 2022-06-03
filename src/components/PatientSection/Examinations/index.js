import React from 'react'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'

import { AiFillPrinter, AiOutlineClose } from 'react-icons/ai'

const Examinations = ({ patient, show, setShow }) => {
  const { examinations } = patient

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className='examinations'
    >
      <div className='exam-icons'>
        <AiFillPrinter style={{ cursor: 'pointer' }} />
        <AiOutlineClose
          style={{ cursor: 'pointer' }}
          onClick={() => setShow(!show)}
        />
      </div>
      <div className='exam-container-to-print'>
        <h2>
          Pacijent - <span>{patient.name}</span>
        </h2>
        <h4>Celokupna istorija pregleda</h4>
        {examinations.map((exam, index) => (
          <div className='exam' key={index}>
            <h5>
              <span>{exam.date}</span>
            </h5>
            <p>{exam.review}</p>
          </div>
        ))}

        {/* {[
          1, 23, 123, 124, 14, 1, 14, 14, 14, 4, 3, 431, 41, 14, 34, 1, 34, 13,
          4, 1, 41, 34, 14,
        ].map((item) => (
          <h1>{item}</h1>
        ))} */}

        {/* <div className='signature'>
          <h5>Potpis</h5>
          <p>________________________</p>
        </div> */}
      </div>
    </motion.div>
  )
}

export default Examinations
