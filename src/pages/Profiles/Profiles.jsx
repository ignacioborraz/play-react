import React, {useEffect,useState} from 'react'
import axios from 'axios'
import CardProfile from '../../components/CardProfile/CardProfile'
import apiUrl from './../../url'

export default function Profiles() {

  let [perfiles,setPerfiles] = useState([])

  useEffect(()=> {fetchApi()},[])

  async function fetchApi() {
    try {
      let res = await axios.get(apiUrl+'usuarios')
      setPerfiles(res.data.response)
    } catch(error) {
      console.log(error.message)
    }
  }
  
  return (
    <div className='flex j-center wrap'>
      {perfiles?.map((cadaPerfil,index) => <CardProfile key={index} datos={cadaPerfil}/>)}
    </div>
  )

}