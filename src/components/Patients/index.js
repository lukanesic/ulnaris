import React, { useEffect } from 'react'
import Header from './Header'
import Patient from './Patient'
import { fetchPatients } from '../../redux/patientSlice'

import { useDispatch, useSelector } from 'react-redux'

const Patients = () => {
  const { patients } = useSelector((state) => state.patients)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPatients())
  }, [])

  return (
    <div className='patients'>
      <Header />
      <div className='patients-container'>
        {Object.keys(patients).length === 0 && (
          <h2 className='no-patients'>Nemate pacijente!</h2>
        )}

        {patients.map((pat, index) => (
          <Patient patient={pat} key={index} />
        ))}
      </div>
    </div>
  )
}

export default Patients
