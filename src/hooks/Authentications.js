// Aqui se hacen peticiones 
import { useMutation } from '@tanstack/react-query'
import { InicioUser, NuevoUser } from '../querys/Auth.query'

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


