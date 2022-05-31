import React, { useState } from 'react'
import { AnimatePresence } from 'framer-motion'

import Image from './Image'
import Logo from './Logo'
import About from './About'
import Button from '../UI/Button'
// import Backdrop from '../Backdrop'
import AddPatient from './AddPatient'
import Sidemenu from '../Sidemenu'

const Hero = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className='hero'>
      <Logo />
      <Image />
      <About />
      <Button onClick={() => setOpen(!open)}>Dodajte novog pacijenta</Button>
      <AnimatePresence exitBeforeEnter>
        {open && (
          <Sidemenu>
            {/* <AddPatient open={open} setOpen={setOpen} /> */}
            <h1>Kurin</h1>
          </Sidemenu>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Hero
