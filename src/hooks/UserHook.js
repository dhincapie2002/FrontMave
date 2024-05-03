import { useQuery } from "@tanstack/react-query";
import { GetAllUsers, GetUserInfo } from "../querys/User.query";

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