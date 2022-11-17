import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import alertActions from '../../store/actions/alerta'
import axios from 'axios'
import apiUrl from './../../url'
import './newMentor.css'

export default function NewMentor() {

    let form = useRef()
    let dispatch = useDispatch()
    let { alerta } = alertActions

    async function NewMentor(event) {
        event.preventDefault()
        let data = {}
        Array.from(form.current).forEach(input=>{
            if(input.name==='date') {
                data[input.name] = Date(input.value.trim())
            } else if(input.name==='hobbies' || input.name==='comidas') {
                data[input.name] = input.value.trim().split(',')
            } else if(input.name) {
                data[input.name] = input.value.trim()
            }
        })
        try {
            let res = await axios.post(apiUrl+'usuarios',data)
            console.log(res.data.message)
            if (res.data.success) {
                alert('creado!')
            } else {
                dispatch(alerta(res.data.message))
            }
        } catch(error) {
            console.log(error.message)
        }
    }

    return (
        <form onSubmit={NewMentor} ref={form} className='New-container'>
            <input type='text' name='nombre' placeholder='nombre' className='New-text'/>
            <input type='number' name='edad' placeholder='edad' className='New-text'/>
            <input type='date'name='nacimiento' placeholder='nacimiento' className='New-text'/>
            <input type='url' name='foto' placeholder='foto' className='New-text'/>
            <input type='mail' name='mail' placeholder='mail' className='New-text'/>
            <input type='text' name='hobbies' placeholder='hobbies (separar con comas)' className='New-text'/>
            <input type='text' name='comidas' placeholder='comidas (separar con comas)' className='New-text'/>
            <input type="submit" className='New-title' required value='registrar!' />
        </form>
    )

}