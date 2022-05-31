import React from 'react'
import { GoPlus } from 'react-icons/go'

const Button = ({ children, btn, onClick }) => {
  return (
    <div className={`button ${btn}`} onClick={onClick}>
      <GoPlus className='plus' />
      <button>{children}</button>
    </div>
  )
}

export default Button
