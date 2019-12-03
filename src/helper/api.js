
import axios from 'axios'
export default() => {
    return axios.create({
        baseURL: `https://newsapi.org/v2`,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
}
