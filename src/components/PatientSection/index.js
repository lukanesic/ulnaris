import React from 'react'
import { useSelector } from 'react-redux'

import PHeader from './PHeader'
import PHistory from './PHistory'

const PatientSection = () => {
  const { patient } = useSelector((state) => state.patients)

  const { examinations } = patient

  return (
    <div className='patient-section'>
      <PHeader patient={patient} />
      <PHistory examinations={examinations} />
    </div>
  )
}

export default PatientSection
