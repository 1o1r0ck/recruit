import { useQuery } from "react-query";
import { News } from "../types/types";

const Api = "https://hacker-news.firebaseio.com/v0";

function fetchLatestNews(limit: number): Promise<number[]> {
  return fetch(`${Api}/newstories.json`)
    .then((res) => res.json())
    .then((data: number[]) => data.slice(0, limit));
}

function fetchNewsDetails(newsId: number): Promise<News> {
  return fetch(`${Api}/item/${newsId}.json`).then((res) => res.json());
}

function sortNewsByTime(newsList: News[]): News[] {
  return newsList.sort((a, b) => b.time - a.time);
}

export function useLatestNews(limit: number) {
  const { data: newsIds, isLoading: isLoadingIds } = useQuery<number[]>(
    "newsIds",
    () => fetchLatestNews(limit)
  );

  const { data: newsDetails, isLoading: isLoadingDetails } = useQuery<News[]>(
    ["newsDetails", newsIds],
    () => {
      if (!newsIds) return [];
      return Promise.all(newsIds.map((id) => fetchNewsDetails(id)));
    },

    {
      enabled: !isLoadingIds,
    }
  );

  return {
    data: sortNewsByTime(newsDetails || []),
    isLoading: isLoadingIds || isLoadingDetails,
  };
}
