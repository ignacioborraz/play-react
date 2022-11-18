import { createReducer } from '@reduxjs/toolkit'
import userActions from '../actions/usuario'

const { obtenerUsuarios } = userActions

const initialState = {
    value: "",
    perfiles: []
}

const userReducer = createReducer(initialState,
    (builder) => {
        builder
        .addCase(obtenerUsuarios.fulfilled, (state, action) => {
            //console.log(action.payload)
            let newState = {
                ...state,
                value: action.payload[0],
                perfiles: action.payload[1]
            }
            //console.log(newState)
            return newState
        })
    }
)

export default userReducer