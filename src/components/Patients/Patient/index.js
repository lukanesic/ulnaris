import React from 'react'

import { useDispatch } from 'react-redux'
import { selecedPatient } from '../../../redux/patientSlice'

const Patient = ({ patient }) => {
  const dispatch = useDispatch()

  const { name, jmbg } = patient
  return (
    <div className='patient'>
      <h4>{name}</h4>
      <p>
        JMBG: <span>{jmbg}</span>
      </p>
      <button onClick={() => dispatch(selecedPatient(patient))}>
        Pogledaj Pacijenta
      </button>
    </div>
  )
}

export default Patient
