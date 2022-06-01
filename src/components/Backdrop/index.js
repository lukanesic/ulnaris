import React from 'react'
import { motion } from 'framer-motion'

const Backdrop = ({ children, setOpen, open }) => {
  return (
    <motion.div
      className='backdrop'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0.2 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      onClick={() => setOpen(!open)}
    >
      {children}
    </motion.div>
  )
}

export default Backdrop
