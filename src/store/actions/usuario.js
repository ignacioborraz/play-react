import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import apiUrl from '../../url'

const obtenerUsuarios = createAsyncThunk('obtenerUsuarios', async (value) => {
    let url = `${apiUrl}auth/users?nombre=${value}`
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
    let url = `${apiUrl}auth/signup`
    try {
        await axios.post(url,data)
        return { //el return es el payload (carga) que recibe el reductor
            success: true,
            response: 'usuario creado'
        }
    } catch (error) {
        console.log(error)
        return { //el return es el payload (carga) que recibe el reductor
            success: false,
            response: error.response.data.message
        }
    }
})

const obtenerCarousel = createAsyncThunk('obtenerCarousel', async (value) => {
    let url = `${apiUrl}auth/users`
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

const ingresar = createAsyncThunk('ingresar', async (data) => {
    let url = `${apiUrl}auth/signin`
    try {
        let user = await axios.post(url,data)
        console.log(user.data.response)
        return { //el return es el payload (carga) que recibe el reductor
            success: true,
            response: user.data.response
        }
    } catch (error) {
        console.log(error)
        return { //el return es el payload (carga) que recibe el reductor
            success: false,
            response: error.response.data.message
        }
    }
})

const salir = createAsyncThunk('salir', async (token) => {
    let url = `${apiUrl}auth/signout`
    const headers = {headers: {'Authorization': 'Bearer '+token}}
    try {
        let user = await axios.put(url,null,headers)
        console.log(user.data)
        return { //el return es el payload (carga) que recibe el reductor
            success: true,
            response: user.data.message
        }
    } catch (error) {
        console.log(error)
        return { //el return es el payload (carga) que recibe el reductor
            success: false,
            response: error.response.data.message
        }
    }
})

const userActions= {
    obtenerUsuarios,
    nuevoUsuario,
    obtenerCarousel,
    ingresar,
    salir
}

export default userActions