import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "6412ed318d614501a69df829f56e8025"
    }
})