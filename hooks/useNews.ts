import { useQuery, useQueryClient } from "react-query";
import NewsApi from "../api/news";
import { News } from "../app/types/types";

const sortNews = (news: News[]): News[] => {
  return news.sort((a, b) => b.time - a.time);
};

export const useNews = () => {
  const { data: newsIds, isLoading: isLoadingNews } = useQuery<number[]>(
    "newsIds",
    () => NewsApi.getAll()
  );
  const { data: newsInfo, isLoading: isLoadingInfo } = useQuery<News[]>(
    ["newsInfo", newsIds],
    () => {
      if (!newsIds) {
        return [];
      }
      return Promise.all(newsIds.map((id) => NewsApi.getById(id)));
    },
    {
      enabled: !isLoadingNews,
    }
  );
  return {
    data: sortNews(newsInfo || []),
    isLoading: isLoadingNews || isLoadingInfo,
  };
};
