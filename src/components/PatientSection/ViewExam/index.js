import React, { useRef } from 'react'
import { useReactToPrint } from 'react-to-print'
import ExamContainer from '../ExamContainer'

const ViewExam = ({ examination, show, setShow, patientId, examIndex }) => {
  const componentRef = useRef()

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  })

  return (
    <ExamContainer
      patientId={patientId}
      show={show}
      setShow={setShow}
      examIndex={examIndex}
      deleteExam
      printer
      handlePrint={handlePrint}
    >
      <div className='view-exam' ref={componentRef}>
        <h2>
          Datum: <span>{examination.date}</span>
        </h2>
        <p>{examination.review}</p>
      </div>
    </ExamContainer>
  )
}

export default ViewExam
