import React, { useState,useEffect } from 'react'
import perfiles from '../../perfiles'
import Boton from '../../components/Boton/Boton'
import ComidaHobby from '../../components/ComidaHobby/ComidaHobby'
import EdadFechaMail from '../../components/EdadFechaMail/EdadFechaMail'
import NombreFoto from '../../components/NombreFoto/NombreFoto'

export default function Carousel() {
  
  let [numero,setNumero] = useState(0)
  let [abrir,setAbrir] = useState(false)
  let [timeId,setTimeId] = useState(0)

  useEffect(() => {
    let id = setInterval(()=> {
        console.log('pasaron 5 segundos')
        next()        
      },5000
    )
    //setInterval retorna un id necesario para "resetear el contador" y es necesario retornarlo para utilizarlo
    setTimeId(id)
    //para que el intervalo se borre correctamente debemos retornar la funcion que va a limpiar el contador de tiempo
    return ()=> clearInterval(timeId)
}, [numero])


  function next() {
    if (numero<perfiles.length-1) {
      setNumero(numero+1)
    } else {
      setNumero(0)
    }    
    console.log('se ejecutó next');
    clearInterval(timeId)
  }

  function prev() {
    if (numero>0) {
      setNumero(numero-1)
    } else {
      setNumero(perfiles.length-1)
    }
    clearInterval(timeId)
  }

  let open = () => {
    setAbrir(!abrir)
  }

  return (
    <div className='card black'>
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
    </div>
  )

}

/*
COMO alumno de la app
QUIERO pasar los slides
PARA ver los perfiles de cada mentor
*/
/*
COMO usuario de la app
QUIERO clickear un boton
PARA ver/ocultar detalles de los mentores
*/
