import axios from "axios";
import Cookies from "universal-cookie";
import { URL } from "./Auth.query";

const cook = new Cookies()
export let IdUser = cook.get(`id`)
let tokenA = cook.get(`token`);

export async function GetNotify(id) {
    return await axios.post(`${URL}/Question/PositiveReinforcement/${id}`,
    {
        headers: {
            Authorization: `Bearer ${tokenA}`
        }
    })
}
export async function SendMensage() {
    return await axios.post(`${URL}/Notify/SendMesssages`)
}