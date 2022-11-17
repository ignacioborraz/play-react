import { configureStore } from '@reduxjs/toolkit'
import mainReducer from './reducers/index'

export const store = configureStore({
    reducer: mainReducer
})