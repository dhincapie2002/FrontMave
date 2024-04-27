// Aqui se hacen peticiones 
import { useMutation, useQuery } from '@tanstack/react-query'
import { GetUserInfo, InicioUser, NuevoUser } from '../querys/Auth.query'

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

export function GetUser(id) {
    return useMutation({
        mutationFn: async() => await GetUserInfo(id)
    })
}

