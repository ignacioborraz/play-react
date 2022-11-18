import { createReducer } from '@reduxjs/toolkit'
import userActions from '../actions/usuario'

const { obtenerUsuarios,nuevoUsuario,obtenerCarousel } = userActions

const initialState = {
    value: "",
    perfiles: [],
    carousel: []
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
    }
)

export default userReducer