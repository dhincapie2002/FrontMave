import axios from "axios";
import Cookies from "universal-cookie";
import { URL } from "./Auth.query";

const cook = new Cookies()

let tokenA = cook.get(`token`)
let idUser = cook.get(`id`)
export let role
export async function GetUserInfo(id) {
    const result = await axios.get(`${URL}/User/GetUserInfo/${id}`, {
        headers: {
            Authorization: `Bearer ${tokenA}`
        }
    })
    role = result.data.RoleId
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
        userName:data.name,
        email: data.email,
        phone: data.phone,
        idRole: data.rol
    },
    {
        headers: {
            Authorization: `Bearer ${tokenA}`
        }
    })

}