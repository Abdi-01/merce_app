import axios from 'axios'
import { API_URL } from '../../helper'
import AsyncStorage from '@react-native-async-storage/async-storage'

// REDUX_STANDART
export const onLogin = (data) => {
    // mengarahkan data ke penyimpanan reducers atau globalStore
    // VERSI REDUX STANDART
    return {
        type: "LOGIN_SUCCESS",
        payload: data
    }
}

// REDUX_THUNK
export const loginAction = (username, password) => {
    return async (dispatch) => {
        try {
            let res = await axios.get(`${API_URL}/users?username=${username}&password=${password}`)
            if (res.data.length > 0) {
                console.log("Data login iduser", res.data[0].id)
                // menyimpan data pada asyncstorage
                await AsyncStorage.setItem("data", JSON.stringify(res.data[0]))
                // mengarahkan data ke penyimpanan reducers atau globalStore
                // VERSI REDUX_THUNK
                dispatch({
                    type: "LOGIN_SUCCESS",
                    payload: res.data[0]
                })
                return { success: true }
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export const logOutAction = () => {
    return async (dispatch) => {
        try {
            await AsyncStorage.removeItem("data")
            dispatch({
                type: "LOGOUT"
            })

            return { success: true }
        } catch (error) {
            console.log(error)
        }
    }
}

export const regisAction = (username, email, password) => {
    return async (dispatch) => {
        try {
            let res = await axios.post(API_URL + "/users", {
                username,
                email,
                password,
                role: "user",
                cart: []
            })
            if (res.data) {
                return { success: true, title: "Success ✅", message: "Register Success" }
            } else {
                return { success: false, title: "Warning ⚠️", message: "Register Not Success" }
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export const updateCartAction = (data, iduser) => {
    return async (dispatch) => {
        try {
            let res = await axios.patch(API_URL + `/users/${iduser}`, {
                cart: data
            })


            if (res.data.id) {
                console.log(res.data)
                // update data cart pada reducer
                dispatch({
                    type: "UPDATE_CART",
                    payload: res.data.cart
                })
                return { success: true }
            }

        } catch (error) {
            console.log(error)
        }
    }
}