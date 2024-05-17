import {  useQuery } from '@tanstack/react-query'
import { GetDataGraficsIni , GetDataGraficsMood, GetReport} from '../querys/Grafics.query'

export function GetGraficsIni(id) {
    return useQuery({
        queryKey: ['graficsIni'],
        queryFn: async()=> await GetDataGraficsIni(id)
    })
}
export function GetGraficsMood(id) {
    return useQuery({
        queryKey: ['graficsMood'],
        queryFn: async ()=> await GetDataGraficsMood(id),
    })
}
export function GetReportInitial(id) {
    return useQuery({
        queryKey:['Report'],
        queryFn: async ()=> await GetReport(id)
    })
}