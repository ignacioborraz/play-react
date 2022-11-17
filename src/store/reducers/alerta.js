import { createReducer } from '@reduxjs/toolkit'
import alertActions from '../actions/alerta'

const { alerta } = alertActions

const initialState = {
    message: {
        view: false,
        message: ''
    }
}

const alertReducer = createReducer(initialState,
    (builder) => {
        builder
            .addCase(alerta, (state, action) => {
                console.log(action.payload)
                let newState = {
                    ...state,
                    message: {
                        view: true,
                        message: action.payload
                    } }
                console.log(newState)
                return newState
            }
        )
    }
)

export default alertReducer