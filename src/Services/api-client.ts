import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key :'6e8c2c5d5129402880114e3f3462ac3b',
    }
})