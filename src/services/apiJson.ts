import axios from "axios"

const apiJson = axios.create({
    baseURL: 'https://api.rawg.io'
})

export default apiJson;
