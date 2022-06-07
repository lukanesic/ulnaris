import React from 'react'

const Header = ({ children }) => {
  return (
    <div className='header'>
      <h1>Pacijenti</h1>
      {children}
    </div>
  )
}

export default Header
