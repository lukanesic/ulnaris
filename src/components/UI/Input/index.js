import React from 'react'

const Input = ({ label, type, placeholder, onChange, validation }) => {
  return (
    <div className='input'>
      <label className={`${!validation && 'label-wrong'}`}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        className={`${!validation && 'input-wrong'}`}
      />
    </div>
  )
}

export default Input
