import axios from "axios";
import { API_URL } from '../../helper'

export const getProductsAction = () => {
    return async (dispatch) => {
        try {
            let get = await axios.get(API_URL + "/products")
            console.log("ambil data products", get.data)
            // dispatch({
            //     type: "GET_PRODUCTS",
            //     payload: get.data
            // })
        } catch (error) {
            console.log(error)
        }
    }
}