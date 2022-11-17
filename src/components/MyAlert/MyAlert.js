import React from 'react'
import { useSelector } from 'react-redux'

export default function MyAlert() {
    let { message } = useSelector(store => store.alerta)
    console.log(message)
    return (
        message.view &&
            <>
            {message.message.map((every,index) => <p key={index}>{every}</p>)}
            </>
    )
}
