import axios from "axios";

const URL = import.meta.env.VITE_URL

// Inicio de session 
export async function InicioUser(data) {
    return await axios.post(`${URL}/User/LogIn`, {
        user: data.mail,
        pass: data.password
    })
}


// crea un nuevo usuario
export async function NuevoUser(data) {
    return await axios.post(`${URL}/User/SigIn`, {
        userName: data.name,
        email: data.email,
        phone: data.telefono,
        password: data.pass
    })
}

// reset password desde mail
export async function ResetPass(data) {
    return await axios.post(`${URL}/User/PasswordRecovery`, {   
        email: data.email
    })
}