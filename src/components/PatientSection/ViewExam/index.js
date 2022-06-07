import React from 'react'

const ViewExam = ({ examination }) => {
  return (
    <div className='view-exam'>
      <h2>
        Datum: <span>{examination.date}</span>
      </h2>
      <p>{examination.review}</p>
    </div>
  )
}

export default ViewExam
