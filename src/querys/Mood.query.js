import axios from "axios"
import { URL, token } from "./Auth.query"
import Cookies from "universal-cookie/cjs"


const cook = new Cookies()

let id = cook.get('id')

export async function MoodScore(data){
    return await axios.post('${URL}/Mood/SetMood/${id}',{ 
        score : data.opcion
    }, 
    {
        headers: {
            Authorization: 'Bearer ${token}'
        }
    })
}