import React from 'react'

const PHistory = ({ patient }) => {
  const { examinations } = patient

  return (
    <div className='p-history'>
      {Object.keys(patient).length === 0 && (
        <h2 className='no-patients'>
          Izaberite pacijenta za prikaz istorije pregleda!
        </h2>
      )}

      {Object.keys(examinations).length === 0 && (
        <h2 className='no-patients'>
          Izabrani pacijent nema istoriju pregleda..
        </h2>
      )}

      {Object.keys(patient).length !== 0 && (
        <>
          {patient.examinations.map((examination, index) => (
            <PHBox examination={examination} key={index} />
          ))}
        </>
      )}
    </div>
  )
}

export default PHistory

const PHBox = ({ examination }) => {
  return (
    <div className='p-box'>
      <h5>
        Datum Pregleda: <span>{examination.date}</span>
      </h5>
      <div className='p-box-btns'>
        <button>View</button>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  )
}
