import React, {useEffect,useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import userActions from './../../store/actions/usuario'
import Boton from '../../components/Boton/Boton'
import ComidaHobby from '../../components/ComidaHobby/ComidaHobby'
import EdadFechaMail from '../../components/EdadFechaMail/EdadFechaMail'
import NombreFoto from '../../components/NombreFoto/NombreFoto'

export default function Carousel() {
  
  let [numero,setNumero] = useState(0)
  let [abrir,setAbrir] = useState(false)
  let [id,setId] = useState(0)
  let dispatch = useDispatch()
  let { obtenerCarousel } = userActions
  const { carousel } = useSelector(store => store.usuario)

  useEffect(()=> {
    if (carousel.length===0) {
      dispatch(obtenerCarousel())
    }    
  },[])

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
    if (numero<carousel.length-1) {
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
      setNumero(carousel.length-1)
    }
    console.log('se ejecutó prev')
    clearInterval(id)
  }

  let open = () => {
    setAbrir(!abrir)
  }

  return (
    <div className='card black'>
      {carousel.length>0 ?
        <>
          <NombreFoto nombre={carousel[numero].nombre} foto={carousel[numero].foto}/>
          {abrir ?
            (<p className='gray flex j-center a-center' onClick={open}>mas info</p>) :
            (<>
              <p className='gray flex j-center a-center' onClick={open}>ocultar info</p>
              <div className='edad-fecha'>
                <EdadFechaMail campo='Edad' dato={carousel[numero].edad} margen='r25' ancho='edad' />
                <EdadFechaMail campo='Fecha' dato={carousel[numero].nacimiento} margen='l25' ancho='fecha' />
              </div>
              <EdadFechaMail campo='Mail' dato={carousel[numero].mail} />
              <ComidaHobby campo='Comidas' datos={carousel[numero].comidas} />
              <ComidaHobby campo='Hobbies' datos={carousel[numero].hobbies} />
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