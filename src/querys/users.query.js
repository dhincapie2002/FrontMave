import axios from "axios";

const URL = import.meta.env.VITE_URL

export let token;
// Inicio de session 
export async function InicioUser(data) {
    const result = await axios.post(`${URL}/User/LogIn`, {
        email: data.mail,
        pass: data.password
    })
    token = result.data.Authentication
    return result
}


// crea un nuevo usuario
export async function NuevoUser(data) {
    const result =  await axios.post(`${URL}/User/SigIn`, {
        userName: data.name,
        email: data.email,
        phone: data.telefono,
        password: data.pass
    })

    token = result.data.Authentication
    return result
}

// reset password desde mail
export async function ResetPass(data) {
    return await axios.post(`${URL}/User/PasswordRecovery`, {
        email: data.email
    })
}

//reset password link email
export async function Reset(data) {
    return await axios.post(`${URL}/User/PasswordReset`, {
        password: data.password
    })
}