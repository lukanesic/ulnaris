import React from 'react'

const PHistory = () => {
  return (
    <div className='p-history'>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map((item) => (
        <PHBox />
      ))}
    </div>
  )
}

export default PHistory

const PHBox = () => {
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
