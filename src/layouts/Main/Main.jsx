import React from 'react'

export default function Main(props) {
    console.log(props)
    console.log(props.children)
    //todo lo que esté adentro de Main se renderiza en children
  return (
    <div className='h100 w100 flex column'>
        <div>ESTO ES LA BARRA DE NAVEGACION QUE DESPUES TIENEN QUE PERSONALIZAR</div>
        {/* esto se tiene que reeemplazar por el componente navbar o header */}
        <div className='grow black'>{props.children}</div>
        <div>ESTE ES EL FOOTER DE LA APP QUE DESPUES TIENEN QUE MODIFICAR</div>
        {/* esto se tiene que reemplazar por el componentes footer */}
    </div>
  )
}
