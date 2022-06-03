import { AnimatePresence } from 'framer-motion'
import React, { useState } from 'react'
import Examinations from '../Examinations'
import NewExam from '../NewExam'
import Backdrop from './../../Backdrop'

const PHeader = ({ patient }) => {
  const { name, jmbg, surname, email, phone } = patient

  const [showExams, setShowExams] = useState(false)
  const [addExam, setAddExam] = useState(false)

  return (
    <>
      <div className='p-header'>
        <h2>Istorija bolesti</h2>
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
            <h5>JMBG: {jmbg}</h5>
            <h5>
              Telefon: {phone} | Email: {email}
            </h5>

            <div className='patient-btns'>
              <button onClick={() => setAddExam(!addExam)}>Novi pregled</button>
              <button onClick={() => setShowExams(!showExams)}>
                Svi pregledi
              </button>
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
