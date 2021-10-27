import axios from 'axios'
import { API_URL } from '../../helper'

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
    return (dispatch) => {
        axios.get(`${API_URL}/users?username=${username}&password=${password}`)
            .then((res) => {
                if (res.data.length > 0) {
                    console.log("Data login iduser", res.data[0].id)
                    // mengarahkan data ke penyimpanan reducers atau globalStore
                    // VERSI REDUX_THUNK
                    dispatch({
                        type: "LOGIN_SUCCESS",
                        payload: res.data[0]
                    })
                }
            }).catch((err) => {
                console.log(err)
            })
    }
}


export const regisAction = (data) => {
    return (dispatch) => {
        axios.post(API_URL + "/users", {
            username: data.username,
            email: data.email,
            password: data.password,
            role: "user",
            cart: []
        }).then((res) => {
            if (res.data) {
                return true
            } else {
                return false
            }
        }).catch((err) => {
            console.log(err)
        })
    }
}