import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs'

const Search = () => {
  const [jmbg, setJmbg] = useState('')

  // Meni cak i treba na onkeypress jer ce to odmah da mu pretrazuje sve te pacijente sa tim.. Mada moze i ovako jebes ga.
  const onSubmit = (e) => {
    e.preventDefault()
    console.log(jmbg)
  }

  return (
    <div className='search'>
      <BsSearch />
      <form onSubmit={onSubmit}>
        <input
          type='text'
          placeholder='Pacijentov JMBG'
          onChange={(e) => setJmbg(e.target.value)}
        />
      </form>
    </div>
  )
}

export default Search
