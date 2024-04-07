// Aqui se hacen peticiones 
import { useQuery, useMutation } from '@tanstack/react-query'
import { InicioUser, NuevoUser, ResetPass } from '../querys/users.query'

// consulta de usuario para hacer login}
export function SessionInit() {
    return useMutation({
        mutationFn: async (data) => await InicioUser(data)
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
export function Reset() {
    return useMutation({
        mutationFn: async(data) => await Reset(data)
    })
}

export function InicioSession(){
    return useMutation({
        mutationFn: async(data) => await InicioUser(data)
    })
}

export function GetUser(datos){
    return useQuery({
      queryKey: ['User', datos.id],
      queryFn: async () => await VerUser(datos)       
    })
}