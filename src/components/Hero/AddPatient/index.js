import React from 'react'
import PatientForm from './PatientForm'
import { motion } from 'framer-motion'

const AddPatient = ({ open, setOpen }) => {
  return (
    <motion.div
      className='add-patient'
      initial={{ opacity: 0, width: 150 }}
      animate={{ opacity: 1, width: 462 }}
      exit={{ opacity: 0, width: 150 }}
      transition={{ duration: 0.4, delay: 0.1 }}
    >
      <PatientForm open={open} setOpen={setOpen} />
    </motion.div>
  )
}

export default AddPatient
