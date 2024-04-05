// Aqui se hacen peticiones 
import { useQuery, useMutation } from '@tanstack/react-query'
import { InicioUser, NuevoUser } from '../querys/users.query'

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
