import { useQuery } from "@tanstack/react-query";
import { GetArticles } from "../querys/Article.query";

export function GetAllArticles(id) {
    return useQuery({
        queryKey:[`ArticleAll`],
        queryFn: async() => GetArticles(id)
    })
}