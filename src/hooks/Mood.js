// Aqui se hacen peticiones 
import { useMutation } from '@tanstack/react-query'
import { MoodScore } from "../querys/Mood.query"

export function SendMoodScore(){
    return useMutation({
        mutationFn: async (data) => await MoodScore (data)
    })
}