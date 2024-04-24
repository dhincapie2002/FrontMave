import {  useQuery } from '@tanstack/react-query'
import { GetDataGraficsIni , GetDataGraficsMood} from '../querys/Grafics.query'

export function GetGraficsIni() {
    return useQuery({
        queryKey: ['graficsIni'],
        queryFn: async()=> await GetDataGraficsIni(id)
    })
}export function GetGraficsMood(id) {
    return useQuery({
        queryKey: ['graficsMood'],
        queryFn: async ()=> await GetDataGraficsMood(id),
    })
}