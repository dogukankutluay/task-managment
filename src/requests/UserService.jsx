import axios from 'axios'
import { BaseUrl, ApiConfig} from './../constants/ApiConfig';
export const userLogin=(userData)=>{
    return axios.post(`${BaseUrl}${ApiConfig.auth.login}`,userData)
}