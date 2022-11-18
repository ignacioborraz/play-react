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
            return action.payload
        })
    }
)

export default userReducer