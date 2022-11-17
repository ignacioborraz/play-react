import React, {useEffect,useState} from 'react'
import axios from 'axios'
import Boton from '../../components/Boton/Boton'
import ComidaHobby from '../../components/ComidaHobby/ComidaHobby'
import EdadFechaMail from '../../components/EdadFechaMail/EdadFechaMail'
import NombreFoto from '../../components/NombreFoto/NombreFoto'
import apiUrl from './../../url'

export default function Carousel() {
  
  let [numero,setNumero] = useState(0)
  let [abrir,setAbrir] = useState(false)
  let [id,setId] = useState(0)
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

  useEffect(
    ()=>{  
      let idInterval = setInterval(
        //primer parametro la funcion que se va a ejecutar en cada intervalo de tiempo
        ()=> {
            next()
            console.log('pasaron 5 segundos')
        },
        //segundo parametro es el intervalo en milisengudos
        5000
        //retorna un id asociado al intervalo (que es un numero)
        //acepta una funcion que resetea el intervalo/contador con ese id
      )
      setId(idInterval)
      return clearInterval(id)
      // eslint-disable-next-line
    },[numero]
  )

  function next() {
    if (numero<perfiles.length-1) {
      setNumero(numero+1)
    } else {
      setNumero(0)
    }    
    console.log('se ejecutó next')
    clearInterval(id)
  }

  function prev() {
    if (numero>0) {
      setNumero(numero-1)
    } else {
      setNumero(perfiles.length-1)
    }
    console.log('se ejecutó prev')
    clearInterval(id)
  }

  let open = () => {
    setAbrir(!abrir)
  }

  return (
    <div className='card black'>
      {perfiles[0] ?
        <>
          <NombreFoto nombre={perfiles[numero].nombre} foto={perfiles[numero].foto}/>
          {abrir ?
            (<p className='gray flex j-center a-center' onClick={open}>mas info</p>) :
            (<>
              <p className='gray flex j-center a-center' onClick={open}>ocultar info</p>
              <div className='edad-fecha'>
                <EdadFechaMail campo='Edad' dato={perfiles[numero].edad} margen='r25' ancho='edad' />
                <EdadFechaMail campo='Fecha' dato={perfiles[numero].nacimiento} margen='l25' ancho='fecha' />
              </div>
              <EdadFechaMail campo='Mail' dato={perfiles[numero].mail} />
              <ComidaHobby campo='Comidas' datos={perfiles[numero].comidas} />
              <ComidaHobby campo='Hobbies' datos={perfiles[numero].hobbies} />
            </>)}
          <div className='flex j-center a-center'>
            <Boton tipo='anterior' margen='r25' onClick={prev} />
            <Boton tipo='siguiente' margen='l25' onClick={next} />
          </div>
        </> : null
      }
    </div>
  )

}