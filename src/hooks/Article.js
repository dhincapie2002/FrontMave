import { useMutation, useQuery } from "@tanstack/react-query";
import { AddArticle, GetArticles } from "../querys/Article.query";

export function GetAllArticles(id) {
    return useQuery({
        queryKey:[`ArticleAll`],
        queryFn: async() => GetArticles(id)
    })
}
export function SetArticle() {
    return useMutation({
        mutationFn: async(data)=> AddArticle(data) 
    })
}