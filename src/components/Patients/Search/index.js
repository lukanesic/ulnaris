import React from 'react'
import { BsSearch } from 'react-icons/bs'

const Search = ({ patients, setJmbg }) => {
  if (Object.keys(patients).length === 0) {
    return
  }

  return (
    <div className='search'>
      <BsSearch />
      <form onSubmit={(e) => e.preventDefault()}>
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
