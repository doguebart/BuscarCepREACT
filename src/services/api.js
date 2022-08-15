import axios from "axios"

// 06145096/json/

const api = axios.create({
    baseURL: "https://viacep.com.br/ws/"
})

export default api;