import React, { useState } from 'react'
import Input from './../../../UI/Input'
import Button from './../../../UI/Button'

import { useDispatch } from 'react-redux'

import { AiOutlineClose } from 'react-icons/ai'
import {
  addNewPatientFail,
  addNewPatientRequest,
  addNewPatientSuccess,
} from '../../../../redux/patientSlice'

import { collection, addDoc } from '@firebase/firestore'
import { db } from '../../../../firebase'

const PatientForm = ({ open, setOpen }) => {
  const [newPatient, setNewPatient] = useState({
    name: { value: '', isValid: true },
    surname: { value: '', isValid: true },
    jmbg: { value: '', isValid: true },
    phone: { value: '', isValid: true },
    email: { value: '', isValid: true },
  })

  const inputHandler = (identifier, value) => {
    const val = value.target.value

    setNewPatient((current) => {
      return {
        ...current,
        [identifier]: { value: val, isValid: true },
      }
    })
  }

  const dispatch = useDispatch()

  const submitPatient = async () => {
    const nameIsValid = newPatient.name.value.trim().length > 0
    const surnameIsValid = newPatient.surname.value.trim().length > 0
    const jmbgIsValid = newPatient.jmbg.value.trim().length > 0
    const phoneIsValid = newPatient.phone.value.trim().length > 0
    const emailIsValid =
      newPatient.email.value.trim().length > 0 &&
      newPatient.email.value.includes('@')

    if (
      !nameIsValid ||
      !surnameIsValid ||
      !jmbgIsValid ||
      !phoneIsValid ||
      !emailIsValid
    ) {
      setNewPatient((current) => {
        return {
          name: { value: current.name.value, isValid: nameIsValid },
          surname: { value: current.surname.value, isValid: surnameIsValid },
          jmbg: { value: current.jmbg.value, isValid: jmbgIsValid },
          phone: { value: current.phone.value, isValid: phoneIsValid },
          email: { value: current.email.value, isValid: emailIsValid },
        }
      })
      return
    }

    const newPatientObj = {
      name: newPatient.name.value,
      surname: newPatient.surname.value,
      jmbg: newPatient.jmbg.value,
      phone: newPatient.phone.value,
      email: newPatient.email.value,
      examinations: [],
    }

    dispatch(addNewPatientRequest())
    try {
      const patientRef = collection(db, 'patients')
      const response = await addDoc(patientRef, newPatientObj)
      const id = response.id
      dispatch(addNewPatientSuccess({ ...newPatientObj, id: id }))
    } catch (error) {
      console.log(error)
      dispatch(addNewPatientFail())
    }

    setOpen(!open)
  }

  return (
    <div className='patient-form'>
      <AiOutlineClose className='close' onClick={() => setOpen(!open)} />
      <form>
        <Input
          label='Ime'
          placeholder='Ime pacijenta'
          type='text'
          onChange={inputHandler.bind(this, 'name')}
          validation={newPatient.name.isValid}
        />
        <Input
          label='Prezime'
          placeholder='Prezime pacijenta'
          type='text'
          onChange={inputHandler.bind(this, 'surname')}
          validation={newPatient.surname.isValid}
        />
        <Input
          label='JMBG'
          placeholder='JMBG pacijenta'
          type='text'
          onChange={inputHandler.bind(this, 'jmbg')}
          validation={newPatient.jmbg.isValid}
        />
        <Input
          label='Telefon'
          placeholder='Telefon pacijenta'
          type='text'
          onChange={inputHandler.bind(this, 'phone')}
          validation={newPatient.phone.isValid}
        />
        <Input
          label='Email'
          placeholder='Email pacijenta'
          type='email'
          onChange={inputHandler.bind(this, 'email')}
          validation={newPatient.email.isValid}
        />
      </form>
      <Button btn='dark' onClick={submitPatient}>
        Dodaj
      </Button>
    </div>
  )
}

export default PatientForm
