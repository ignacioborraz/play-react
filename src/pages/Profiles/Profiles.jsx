import { useEffect, useState } from 'react'
import CardProfile from '../../components/CardProfile/CardProfile'

export default function Profiles() {

  let [datos,setDatos] = useState()
  useEffect(
    () => {
      fetch('./perfiles.json')
        .then(res=>res.json())
        .then(res=>setDatos(res))
      },
    []
  )
  
  return (
    <div className='flex wrap'>
      {/* EL ? PARA ESPERAR */}
      {/* KEY PARA MAPEAR */}
      {datos?.map((cadaPerfil,index) => <CardProfile datos={cadaPerfil} key={index} />)}
    </div>
  )

}