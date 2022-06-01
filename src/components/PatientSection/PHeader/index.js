import React from 'react'

const PHeader = ({ patient }) => {
  const { name, jmbg } = patient

  return (
    <div className='p-header'>
      <h2>Istorija bolesti</h2>
      {Object.keys(patient).length === 0 && (
        <>
          <h4>Pacijent nije izabran</h4>
          <h5>Izaberite pacijenta za dalje informacije</h5>
        </>
      )}
      {Object.keys(patient).length !== 0 && (
        <>
          <h4>{name}</h4>
          <h5>JMBG: {jmbg}</h5>
          <button>Pogledajte sve preglede odjednom</button>
        </>
      )}
    </div>
  )
}

export default PHeader
