import React from 'react'
import { GoPlus } from 'react-icons/go'

const Button = ({ children }) => {
  return (
    <div className='button'>
      <GoPlus className='plus' />
      <button>{children}</button>
    </div>
  )
}

export default Button
