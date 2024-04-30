import { useQuery } from "@tanstack/react-query";
import { GetUserInfo } from "../querys/User.query";

export function GetUser(id) {
    return useQuery({
        queryKey: [`keyUsers`],
        queryFn: async() => await GetUserInfo(id)
    })
}