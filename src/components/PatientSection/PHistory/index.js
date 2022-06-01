import React from 'react'

const PHistory = ({ examinations }) => {
  return (
    <div className='p-history'>
      {!examinations && <h1>No data found</h1>}

      {examinations.map((examination, index) => (
        <PHBox examination={examination} key={index} />
      ))}
    </div>
  )
}

export default PHistory

const PHBox = ({ examination }) => {
  return (
    <div className='p-box'>
      <h5>
        Datum Pregleda: <span>20/05/2022</span>
      </h5>
      <div className='p-box-btns'>
        <button>View</button>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  )
}
