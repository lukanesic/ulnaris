import React, { useEffect, useState } from 'react'
import Header from './Header'
import Patient from './Patient'
import { fetchPatients } from '../../redux/patientSlice'

import { useDispatch, useSelector } from 'react-redux'
import Search from './Search'

const Patients = () => {
  const { patients } = useSelector((state) => state.patients)
  const dispatch = useDispatch()

  const [filtered, setFiltered] = useState()
  const [jmbg, setJmbg] = useState('')

  useEffect(() => {
    dispatch(fetchPatients())
  }, [dispatch])

  return (
    <div className='patients'>
      <Header>
        <Search
          patients={patients}
          filtered={filtered}
          setFiltered={setFiltered}
          jmbg={jmbg}
          setJmbg={setJmbg}
        />
      </Header>
      <div className='patients-container'>
        {Object.keys(patients).length === 0 && (
          <h2 className='no-patients'>Nemate pacijente!</h2>
        )}

        {patients
          .filter((val) => {
            if (jmbg === '') {
              return val
            } else if (val.jmbg.includes(jmbg)) {
              return val
            }
          })
          .map((patient, index) => (
            <Patient patient={patient} key={index} />
          ))}
      </div>
    </div>
  )
}

export default Patients
