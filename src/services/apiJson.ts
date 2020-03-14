// const apiJson = {
//     url: 'https://api.rawg.io/api',
//     page: 'https://api.rawg.io/api/games?page=2'
// }
//
// export default apiJson

import axios from "axios"

const apiJson = axios.create({
    url: 'https://api.rawg.io/api'
})

export default apiJson;
