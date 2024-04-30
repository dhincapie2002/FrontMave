import axios from "axios";
import Cookies from "universal-cookie";
import { URL } from "./Auth.query";

const cook = new Cookies()

let tokenA = cook.get(`token`)
export let role
export async function GetUserInfo(id) {
    const result =await axios.get(`${URL}/User/GetUserInfo/${id}`,{
        headers:{
            Authorization: `Bearer ${tokenA}`
        }
    })
    role = result.data.RoleId
    return result;
}