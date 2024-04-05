// Aqui se hacen peticiones 
import { useQuery, useMutation } from '@tanstack/react-query'
import { InicioUser, NuevoUser, ResetPass } from '../querys/users.query'

const initUser = 'inicioSession'

// consulta de usuario para hacer login}
export function SessionInit(data) {
    return useQuery({
        queryKey: [initUser],
        queryFn: async () => await InicioUser(data)
    })
}


// Agrega un nuevo usuario
export function NewUSer() {
    return useMutation({
        mutationFn: async (data) => await NuevoUser(data)
    })
}


// reset password (cambio de contraseña desde el correo)
export function ResetPassword() {
    return useMutation({
        mutationFn: async (data) => await ResetPass(data)
    })
}