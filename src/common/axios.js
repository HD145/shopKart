import axios from "axios"

export const url = "https://fakestoreapi.com/products/category/"

export const endpoints = {
    jewelery:"jewelery"
}


export const axiosInstance = async(url, payload)=>{
    return axios.get(url, payload)
}