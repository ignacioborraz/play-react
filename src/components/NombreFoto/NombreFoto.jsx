import React from 'react'

export default function NombreFoto({nombre,foto}) {
  return (
    <>
      <h2 className='titulo white flex j-center a-center'>{nombre.toUpperCase()}</h2>
      <img src={foto} alt='sujeto1' className='photo' />
    </>
  )
}
