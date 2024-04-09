import { useMutation } from "@tanstack/react-query"
import { CambioPass, ResetPass } from "../querys/ResetPass"

// Envia email para ruta de cabio de nueva contraseña
export function ResetPassword() {
    return useMutation({
        mutationFn: async (data) => await ResetPass(data)
    })
}

// Envia la nueva contraseña a la base de datos
export function Reset() {
    return useMutation({
        mutationFn: async(data) => await CambioPass(data)
    })
}