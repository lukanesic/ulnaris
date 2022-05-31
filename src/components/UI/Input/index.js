import React from 'react'

const Input = ({ label, type, placeholder }) => {
  return (
    <div className='input'>
      <label>{label}</label>
      <input type={type} placeholder={placeholder} />
    </div>
  )
}

export default Input
