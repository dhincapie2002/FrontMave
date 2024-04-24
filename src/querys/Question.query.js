import axios from "axios";
import { URL, token } from "./Auth.query";
import Cookies from "universal-cookie";

const cook = new Cookies()


export let IdUser = cook.get(`id`)
export let tokenA = cook.get(`token`)


export async function SetInitialQuestions(data){
    console.log(tokenA)
    return await axios.post(`${URL}/Question/SetInitialEvaluation/${IdUser}`,
    {
        option: data
    },
    {
       headers:{
            Authorization: `Bearer ${tokenA}`
       }  
    })
}
export async function SetHabitQuestions(data) {
    return await axios.post(`${URL}/Question/SetHabbitScore/${IdUser}`,
        {
            option: data
        },
        {
            headers:{
                Authorization:`Bearer ${token}`
            }
        }
    )
}