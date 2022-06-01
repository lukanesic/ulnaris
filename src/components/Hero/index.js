import React, { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { AiOutlineLogout } from 'react-icons/ai'
import { useNavigate } from 'react-router'

import { motion } from 'framer-motion'

import Image from './Image'
import Logo from './Logo'
import About from './About'
import Button from '../UI/Button'
import Backdrop from '../Backdrop'
import AddPatient from './AddPatient'

const Hero = () => {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  const logoutHandler = () => {
    localStorage.removeItem('admin')
    navigate('/')
  }

  return (
    <div className='hero'>
      <Logo />
      <Image />
      <About />
      <Button onClick={() => setOpen(!open)}>Dodajte novog pacijenta</Button>
      <AnimatePresence exitBeforeEnter>
        {open && (
          <>
            <Backdrop open={open} setOpen={setOpen} />
            <AddPatient open={open} setOpen={setOpen} />
          </>
        )}
      </AnimatePresence>
      <div className='logout'>
        <AiOutlineLogout />
        <motion.h3
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.3 },
          }}
          whileTap={{ scale: 0.9 }}
          onClick={logoutHandler}
        >
          Logout
        </motion.h3>
      </div>
    </div>
  )
}

export default Hero
