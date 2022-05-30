import React from 'react'

import Image from './Image'
import Logo from './Logo'
import About from './About'
import Button from '../UI/Button'

const Hero = () => {
  return (
    <div className='hero'>
      <Logo />
      <Image />
      <About />
      <Button>Dodajte novog pacijenta</Button>
    </div>
  )
}

export default Hero
