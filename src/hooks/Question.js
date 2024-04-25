import { useMutation } from '@tanstack/react-query'
import { SetHabbitScore, SetHabitQuestions, SetInitialQuestions } from "../querys/Question.query";

export function SendQuestionIni() {
    return useMutation({
        mutationFn: async (data) => await SetInitialQuestions(data)
    })
}

export function SendHabitScore() {
    return useMutation({
        mutationFn: async (data) => await SetHabitQuestions(data)
    })
}

export function SendScoreHab() {
    return useMutation({
        mutationFn: async (data) => await SetHabbitScore(data)
    })
}