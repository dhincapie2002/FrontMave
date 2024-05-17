import axios from "axios";
import Cookies from "universal-cookie";
import { URL } from "./Auth.query";

const cook = new Cookies()

let tokenA = cook.get(`token`)
let idUser = cook.get(`id`)
export let role
export let username
export async function GetUserInfo(id) {
    const result = await axios.get(`${URL}/User/GetUserInfo/${id}`, {
        headers: {
            Authorization: `Bearer ${tokenA}`
        }
    })
    role = result.data.RoleId
    username = result.data.UserName
    return result;
}
export async function GetAllUsers(id) {
    return await axios.get(`${URL}/User/GetAllUsers/${id}`,
        {
            headers: {
                Authorization: `Bearer ${tokenA}`
            }
        })
}
export async function ActUser(data) {
    return await axios.put(`${URL}/User/UpdateUser/${data.Id}`, {
        idRole: data.rol
    },
    {
        headers: {
            Authorization: `Bearer ${tokenA}`
        }
    })

}