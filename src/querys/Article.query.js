import axios from "axios";
import Cookies from "universal-cookie";
import { URL } from "./Auth.query";

const cook = new Cookies()

const tokenA = cook.get(`token`)
const idUser = cook.get(`id`)
export async function GetArticles(id) {
    return await axios.get(`${URL}/Article/GetArticles/${id}`,
        {
            headers: {
                Authorization: `Bearer ${tokenA}`
            }
        })
}
export async function AddArticle(data) {
    return await axios.post(`${URL}/Article/PostArticle/${idUser}`,
        {
            articleName: data.title,
            resume: data.resume,
            link: data.link,
            type: 1,
            year: 2024,
            month: 5,
            day: 9,
            image: data.image
        },
        {
            headers: {
                Authorization: `Bearer ${tokenA}`,
                "Content-Type":"multipart/form-data"
            }
        })
}