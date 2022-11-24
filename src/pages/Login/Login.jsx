import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import alertActions from '../../store/actions/alerta'
import userActions from '../../store/actions/usuario'
import SignInGoogle from '../../components/SignInGoogle/SignInGoogle'
import './login.css'

export default function Login() {

    let form = useRef()
    let dispatch = useDispatch()
    let { alerta } = alertActions
    let { ingresar } = userActions

    async function inicarSesion(event) {
        event.preventDefault()
        let data = {}
        Array.from(form.current).forEach(input=>{
            if(input.name) {
                data[input.name] = input.value.trim()
            }
        })
        try {
            let res = await dispatch(ingresar(data))
            console.log(res)
            if (res.payload.success) {
                alert('ingreso!')
            } else {
                dispatch(alerta(res.payload.response))
            }
        } catch(error) {
            console.log(error.message)
        }
    }

    return (
        <>
            <form onSubmit={inicarSesion} ref={form} className='New-container'>
                <input type='mail' name='mail' placeholder='mail' className='New-text'/>
                <input type='password' name='contraseña' placeholder='contraseña' className='New-text'/>
                <input type="submit" className='New-title' required value='registrar!' />
            </form>
            <SignInGoogle />
        </>
    )

}