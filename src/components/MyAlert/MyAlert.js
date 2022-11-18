import React from 'react'
import { useSelector } from 'react-redux'

export default function MyAlert() {
    let { vista,mensaje } = useSelector(store => store.alerta)
    //console.log(vista)
    return (
        vista &&
            <>
            {mensaje.map((every,index) => <p key={index}>{every}</p>)}
            </>
    )
}
