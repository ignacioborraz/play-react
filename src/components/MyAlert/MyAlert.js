import React from 'react'
import { useSelector } from 'react-redux'

export default function MyAlert() {
    let { vista,mensaje } = useSelector(store => store.alerta)
    console.log(mensaje)
    return (
        vista &&
            <>
            {typeof mensaje==='string' ? 
                (<p>{mensaje}</p>) :
                (mensaje.map((every,index) => <p key={index}>{every}</p>))
            }
            </>
    )
}
