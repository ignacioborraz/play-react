import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import apiUrl from '../../url'

const obtenerUsuarios = createAsyncThunk('obtenerUsuarios', async (value) => {
    let url = `${apiUrl}usuarios?nombre=${value}`
    try {
        let res = await axios.get(url)
        //console.log(res.data.response)
        return {value,perfiles: res.data.response}
    } catch (error) {
        console.log(error)
        return {
            payload: { 
                error: 'ocurrió un error'
            }
        }
    }
})

const userActions= {
    obtenerUsuarios
}

export default userActions