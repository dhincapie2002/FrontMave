import axios from "axios";
import Cookies from "universal-cookie";
import { URL } from "./Auth.query";

const cook = new Cookies()

const tokenA = cook.get(`token`)
//const idUsuario = cook.get(`id`)
export async function GetArticles(id) {
    return await axios.get(`${URL}/Article/GetArticles/${id}`,
{
    headers:{
        Authorization: `Bearer ${tokenA}`
    }
})  
}