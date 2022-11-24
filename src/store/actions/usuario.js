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
<<<<<<< HEAD
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
=======
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
>>>>>>> acf1c84b45da114eae27c225c99132d29ec5dd5c
        }
    }
})

const obtenerCarousel = createAsyncThunk('obtenerCarousel', async (value) => {
<<<<<<< HEAD
    let url = `${apiUrl}auth/users`
=======
    let url = `${apiUrl}usuarios`
>>>>>>> acf1c84b45da114eae27c225c99132d29ec5dd5c
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
    salir,
    obtenerCarousel
}

export default userActions