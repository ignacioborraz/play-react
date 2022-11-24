import { createReducer } from '@reduxjs/toolkit'
import userActions from '../actions/usuario'

const { obtenerUsuarios,nuevoUsuario,obtenerCarousel,ingresar,salir,reingresar } = userActions

const initialState = {
    value: "",
    perfiles: [],
    carousel: [],
    nombre: "",
    foto: "",
    online: false,
    token: ""
}

const userReducer = createReducer(initialState,
    (builder) => {
        builder
        .addCase(obtenerUsuarios.fulfilled, (state, action) => {
            //console.log(action.payload) //la carga que viene de la acción
            let newState = { //debe modificar los estados
                ...state, //hago una copia
                value: action.payload.response.value,
                perfiles: action.payload.response.perfiles
            }
            //console.log(newState)
            return newState //retorno el estado modificado
        })
        .addCase(nuevoUsuario.fulfilled, (state, action) => {
            //console.log(action.payload)
            if (action.payload.success) {
                state.perfiles.push(action.payload.response)
            }        
        })
        .addCase(obtenerCarousel.fulfilled, (state, action) => {
            //console.log(action.payload)
            let newState = {
                ...state,
                carousel: action.payload.response.perfiles
            }
            //console.log(newState)
            return newState
        })
        .addCase(ingresar.fulfilled, (state, action) => {
            //console.log(action.payload.response)
            const { success,response } = action.payload
            if (success) {
                let { user,token } = response //este token es el codigo que viene del backend
                localStorage.setItem('token',JSON.stringify({token: {user: token}})) //este objeto token va a guardar
                //la propiedad con el nombre del tipo de token y el token que guarda
                let newState = {
                    ...state,
                    nombre: user.nombre,
                    foto: user.foto,
                    online: true,
                    token: token
                }
                return newState
            } else {
                let newState = {
                    ...state,
                    mensaje: response
                }
                return newState
            }
        })
        .addCase(salir.fulfilled, (state, action) => {
            const { success,response } = action.payload
            if (success) {
                localStorage.removeItem('token')
                let newState = {
                    ...state,
                    nombre: '',
                    foto: '',
                    online: false,
                    token: ''
                }
                return newState
            } else {
                let newState = {
                    ...state,
                    mensaje: response
                }
                return newState
            }
        })
        .addCase(reingresar.fulfilled, (state, action) => {
            console.log(action.payload.response)
            const { success,response } = action.payload
            if (success) {
                let { user,token } = response
                let newState = {
                    ...state,
                    nombre: user.nombre,
                    foto: user.foto,
                    online: true,
                    token: token
                }
                return newState
            } else {
                let newState = {
                    ...state,
                    mensaje: response
                }
                return newState
            }
        })        

    }
)

export default userReducer