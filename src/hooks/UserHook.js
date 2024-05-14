import { useMutation, useQuery } from "@tanstack/react-query";
import { ActUser, GetAllUsers, GetUserInfo } from "../querys/User.query";

export function GetUser(id) {
    return useQuery({
        queryKey: [`keyUsers`],
        queryFn: async() => await GetUserInfo(id)
    })
}
export function GetAllUsersFromAdmin(id) {
    return useQuery({
        queryKey: [`KeyUsersAll`],
        queryFn: async () => await GetAllUsers(id)
    })
}
export function updateUser() {
    return useMutation({
        mutationFn: async (data) => await ActUser(data)
    })
}