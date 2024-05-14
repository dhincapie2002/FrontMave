import {  useQuery } from '@tanstack/react-query'
import { GetNotify } from '../querys/Notify.query'

export function GetNotifyAdd(id) {
    return useQuery({
        queryFn: async() => GetNotify(id)
    })
}