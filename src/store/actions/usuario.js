import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import apiUrl from '../../url'

const obtenerUsuarios = createAsyncThunk('obtenerUsuarios', async (value) => {
    let url = `${apiUrl}usuarios?nombre=${value}`
    try {
        let res = await axios.get(url)
        return { //el return es el payload (carga) que recibe el reductor
            success: true,
            response: { value, perfiles: res.data.response }
        }
    } catch (error) {
        console.log(error)
        return {
            success: false,
            response: 'ocurrió un error'
        }
    }
})

const nuevoUsuario = createAsyncThunk('nuevoUsuario', async (data) => {
    let url = `${apiUrl}usuarios`
    try {
        let res = await axios.post(url,data)
        //console.log(res.data?.id)
        if (res.data.id) {
            return { //el return es el payload (carga) que recibe el reductor
                success: true,
                response: data
            }
        } else {
            return { //el return es el payload (carga) que recibe el reductor
                success: false,
                response: res.data.message
            }
        }
    } catch (error) {
        console.log(error)
        return {
            success: false,
            response: 'ocurrió un error'
        }
    }
})

const obtenerCarousel = createAsyncThunk('obtenerCarousel', async (value) => {
    let url = `${apiUrl}usuarios`
    try {
        let res = await axios.get(url)
        let perfiles = res.data.response.slice(4)
        //console.log(perfiles)
        return { //el return es el payload (carga) que recibe el reductor
            success: true,
            response: { value, perfiles: perfiles }
        }
    } catch (error) {
        console.log(error)
        return {
            success: false,
            response: 'ocurrió un error'
        }
    }
})

const userActions= {
    obtenerUsuarios,
    nuevoUsuario,
    obtenerCarousel
}

export default userActions