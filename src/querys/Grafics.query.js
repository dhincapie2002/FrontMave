import axios from "axios";
import { URL } from "./Auth.query";
import Cookies from "universal-cookie";

const cook = new Cookies()


export let IdUser = cook.get(`id`)
let tokenA = cook.get(`token`);

export async function GetDataGraficsIni(id) {
    const result = await axios.get(`${URL}/Question/GetInitialGraphic/${id}`,
        {
            headers: {
                Authorization: `Bearer ${tokenA}`
            }
        })
    console.log(result)
    return result;
}
export async function GetDataGraficsMood(id) {
    const result = await axios.get(`${URL}/Mood/GetMoodGraphic/${id}`,
        {
            headers: {
                Authorization: `Bearer ${tokenA}`
            }
        })
    return result;
}