import React, {useEffect,useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import ComidaHobby from '../../components/ComidaHobby/ComidaHobby'
import EdadFechaMail from '../../components/EdadFechaMail/EdadFechaMail'
import NombreFoto from '../../components/NombreFoto/NombreFoto'
import apiUrl from './../../url'

export default function Profile() {
  
  let {id} = useParams()
  let [perfil,setPerfil] = useState({})

  useEffect(()=> {fetchApi()},[id])

  async function fetchApi() {
    try {
      let res = await axios.get(`${apiUrl}usuarios/${id}`)
      setPerfil(res.data.response)
    } catch(error) {
      console.log(error.message)
    }
  }

  return (
    perfil ? (
      <div className='card black'>
        <NombreFoto nombre={perfil.nombre} foto={perfil.foto}/>
        <div className='edad-fecha'>
          <EdadFechaMail campo='Edad' dato={perfil.edad} margen='r25' ancho='edad' />
          <EdadFechaMail campo='Fecha' dato={perfil.nacimiento} margen='l25' ancho='fecha' />
        </div>
        <EdadFechaMail campo='Mail' dato={perfil.mail} />
        <ComidaHobby campo='Comidas' datos={perfil.comidas} />
        <ComidaHobby campo='Hobbies' datos={perfil.hobbies} />
      </div>
    ) : (null)
  )

}