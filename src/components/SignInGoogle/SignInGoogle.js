import * as jose from 'jose'
import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Alert from '../Alert/Alert'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const { REACT_APP_ID } = process.env

export default function SignInGoogle() {

    const navigate = useNavigate()
    const buttonDiv = useRef(null)
  
    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
            client_id: REACT_APP_ID,
            callback: handleCredentialResponse,
            context: 'signin'
        });
        google.accounts.id.renderButton(
            buttonDiv.current,
            { theme: "outline", size: "medium", text: 'signin_with' }
        );
    }, [])

    async function handleCredentialResponse(response) {
        let userObject = jose.decodeJwt(response.credential)        
        const google = {
            nombre: userObject.name,
            foto: userObject.picture,
            mail: userObject.email
        }
        localStorage.setItem('token',JSON.stringify({ google }))
        toast(<Alert text='welcome!' />)
        navigate("/",{ replace:true })
    }

    return (
        <div ref={buttonDiv}></div>
    )

}

//agregar script en index.html de app
//<script src="https://accounts.google.com/gsi/client" async defer></script>

//para cerrar sesión hay que borrar del localStorage:
    //si se loguea con google: token.google (google es un objeto con todos los datos que nos dio google)
    //si se loguea con formulario: token.user (user es el objeto que los datos del usuario + el token)