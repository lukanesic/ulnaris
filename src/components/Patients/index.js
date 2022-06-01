import React, { useEffect } from 'react'
import Header from './Header'
import Patient from './Patient'
import { fetchPatients } from '../../redux/patientSlice'

import { useDispatch, useSelector } from 'react-redux'

const Patients = () => {
  const { patients } = useSelector((state) => state.patients)

  console.log(patients)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPatients())
  }, [])

  return (
    <div className='patients'>
      <Header />
      <div className='patients-container'>
        {patients.map((pat) => (
          <Patient patient={pat} />
        ))}
      </div>
    </div>
  )
}

export default Patients
