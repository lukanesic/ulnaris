import React from 'react'
import Header from './Header'
import Patient from './Patient'

const Patients = () => {
  return (
    <div className='patients'>
      <Header />
      <div className='patients-container'>
        {[
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        ].map((pat) => (
          <Patient />
        ))}
      </div>
    </div>
  )
}

export default Patients
