import React, {useEffect,useState} from 'react'
import CardProfile from '../../components/CardProfile/CardProfile'

export default function Profiles() {
  let [perfiles,setPerfiles] = useState([])
  useEffect(()=> {
    fetch('./perfiles.json')
      .then(res=>res.json())
      .then(res=> setPerfiles(res))
      .catch(error=> console.log(error.message))
      // eslint-disable-next-line
  },[])

  let [datos,setDatos] = useState()
  useEffect(
    () => {
      fetch('./perfiles.json')
        .then(res=>res.json())
        .then(res=>setDatos(res))
      },
    []
  )
  console.log(datos)
  
  return (
    <div className='flex wrap'>
      {perfiles?.map((cadaPerfil,index) => <CardProfile key={index} datos={cadaPerfil}/>)}
    </div>
  )

}