import axios from "axios";
import Cookies from "universal-cookie";
import { URL } from "./Auth.query";

const cook = new Cookies()
export let IdUser = cook.get(`id`)
let tokenA = cook.get(`token`);

export async function GetNotify(id) {
    console.log(id,tokenA)
    return await axios.post(`${URL}/Question/PositiveReinforcement/${id}`,
    {
        headers: {
            Authorization: `Bearer ${tokenA}`
        }
    })
}