import axios from "axios";
import Cookies from "universal-cookie";

export const URL = import.meta.env.VITE_URL

export let token;
// Inicio de session 
export async function InicioUser(data) {
    const result = await axios.post(`${URL}/User/LogIn`, {
        email: data.mail,
        pass: data.password
    })
    token = result.data.Token
    return result
}


// crea un nuevo usuario
export async function NuevoUser(data) {
    const result = await axios.post(`${URL}/User/SigIn`, {
        userName: data.name,
        email: data.email,
        phone: data.telefono,
        password: data.pass
    })
    token = result.data.Token
    localStorage.setItem('token', token);
    return result
}


