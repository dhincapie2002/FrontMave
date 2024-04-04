import axios from "axios";
import env from "react-dotenv";

// Inicio de session 
export async function InicioUser({ user, password }) {
    return await axios.get("${env.URL}/")
}


// crea un nuevo usuario
export async function NuevoUser(data) {
    return await axios.post(`${env.REST_API}/User`, {
        NameU: data.name,
        Email: data.email,
        Phone: data.telefono,
        Pass: data.password
    })
}

