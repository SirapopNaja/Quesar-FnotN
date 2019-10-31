import Axios from "axios"

const VUE_APP_API_URL = "http://127.0.0.1:8000";
const api_token = localStorage.getItem('api_token');

const axios = Axios.create({
    baseURL: VUE_APP_API_URL,
    timeout: 10000,
    headers: {
        "Authorization": "Bearer " + api_token,
        'Content-Type': "application/json",
        'Access-Control-Allow-Origin': '*'
    }
})

export default axios