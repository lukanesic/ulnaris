import React from 'react'
import { BsSearch } from 'react-icons/bs'

const Search = () => {
  return (
    <div className='search'>
      <BsSearch />
      <input type='text' placeholder='Pretrazite pacijenta' />
    </div>
  )
}

export default Search
