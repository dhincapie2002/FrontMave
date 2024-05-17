import axios from "axios";
import { URL, token } from "./Auth.query";
import Cookies from "universal-cookie";

const cook = new Cookies()


export let IdUser = cook.get(`id`)
export let tokenA = cook.get(`token`)

export async function GetInitialQuestions(id) {
    return await axios.get(`${URL}/Question/GetInitialEvaluation/${id}`,{
        headers:{
            Authorization: `Bearer ${tokenA}`
        }
    })
}

export async function SetInitialQuestions(data){
    console.log(data)
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
    return await axios.post(`${URL}/Question/SetHabitScore/${IdUser}`,
        {
            score: data
        },
        {
            headers:{
                Authorization:`Bearer ${tokenA}`
            }
        }
    )
}
export async function SetHabbitScore(data) {
    
    return await axios.post(`${URL}/Mood/SetMood/${IdUser}`,
    {
        score: data
    },
    {
        headers:{
            Authorization: `Bearer ${tokenA}`
        }
    }
    )    
}
export async function GetHabbitQuestions(id) {
    return await axios.get(`${URL}/Question/GetHabitQuestions/${id}`,
        {
            headers:{
                Authorization: `Bearer ${tokenA}`
            }
        }
    )
}