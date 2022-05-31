import React from 'react'
import PatientForm from './PatientForm'
import { motion } from 'framer-motion'

const AddPatient = ({ open, setOpen }) => {
  return (
    <motion.div
      className='add-patient'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0.2 }}
      transition={{ duration: 0.4, delay: 0.1 }}
    >
      <PatientForm open={open} setOpen={setOpen} />
    </motion.div>
  )
}

export default AddPatient
