import axios from "axios"

// reset password desde mail
export async function ResetPass(data) {
    return await axios.post(`${URL}/User/PasswordRecovery`, {
        data: data.email
    })
}

//Recibe la nueva contreseña y la cambia
export async function CambioPass(data) {
    return await axios.put(`${URL}/User/PasswordReset/${data.id}`,
        {
            data: data.data.pass
        },
        {
            headers: {
                Authorization: `Bearer ${data.token}`
            }

        })
}