

import axios from "axios"

const clientId = "307954caefc6466"
 const request = axios.create({
    baseURL: "https://api.imgur.com/3/",
    headers:{
        Authorization: `Client-ID ${clientId}`
    }
})

export default request