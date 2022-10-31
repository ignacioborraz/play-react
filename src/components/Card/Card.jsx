import React, { useState } from 'react'
import perfiles from '../../perfiles'
import Boton from '../Boton/Boton'
import ComidaHobby from '../ComidaHobby/ComidaHobby'
import EdadFechaMail from '../EdadFechaMail/EdadFechaMail'
import NombreFoto from '../NombreFoto/NombreFoto'

export default function Card() {
  
  let [numero,setNumero] = useState(0)
  let [abrir,setAbrir] =useState(false)

  let next = () => {
    if (numero<perfiles.length-1) {
      setNumero(numero+1)
    } else {
      setNumero(0)
    }    
  }

  let prev = () => {
    if (numero>0) {
      setNumero(numero-1)
    } else {
      setNumero(perfiles.length-1)
    }    
  }

  let open = () => {
    setAbrir(!abrir)
  }

  //PRIMERO RENDERIZO CON INDEX 0
  
  //DESCOMPONGO
    //NOMBRE-FOTO CON PROPS
    //BOTONES
    //COMIDA-HOBBY DESESTRUCTURANDO
  
  //EVENTO PARA ANTERIOR-SIGUIENTE
  
  //LUEGO DESPLEGABLE

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
