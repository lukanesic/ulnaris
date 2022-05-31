import React from 'react'
import Input from './../../../UI/Input'
import Button from './../../../UI/Button'

import { AiOutlineClose } from 'react-icons/ai'

const PatientForm = ({ open, setOpen }) => {
  return (
    <div className='patient-form'>
      <AiOutlineClose className='close' onClick={() => setOpen(!open)} />
      <form>
        <Input label='Ime' placeholder='Ime pacijenta' type='text' />
        <Input label='Prezime' placeholder='Prezime pacijenta' type='text' />
        <Input label='JMBG' placeholder='JMBG pacijenta' type='text' />
        <Input label='Telefon' placeholder='Telefon pacijenta' type='text' />
        <Input label='Email' placeholder='Email pacijenta' type='email' />
      </form>
      <Button btn='dark'>Dodaj</Button>
    </div>
  )
}

export default PatientForm
