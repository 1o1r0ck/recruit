import axios from 'axios'
import { News } from '../app/types/types'

const URL = 'https://hacker-news.firebaseio.com/v0'


class NewsApi{
    
    async getAll() : Promise<number[]> {
        return await axios.get(`${URL}/newstories.json`).then((res) => res.data.slice(0, 100))
    }

    async getById(id: number) : Promise<News> {
        return await axios.get(`${URL}/item/${id}.json`).then((res) => res.data )
    }
    


}

export default new NewsApi()