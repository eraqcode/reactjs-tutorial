import Axios from 'axios'

export const getPosts = async () => {
    const resp = await Axios.get('https://jsonplaceholder.typicode.com/posts')
    return resp.data;
}