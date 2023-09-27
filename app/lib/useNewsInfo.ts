import axios from "axios";
import { useQuery } from "react-query";
const Api = "https://hacker-news.firebaseio.com/v0";
import { FullNews } from "../types/types";

const fetchNewsInfo = async (newsId: number) => {
  const response = await axios.get(
    `https://hacker-news.firebaseio.com/v0/item/${newsId}.json`
  );
  return response.data;
};

const useNewsInfo = (newsId: number) => {
  return useQuery(["news", newsId], () => fetchNewsInfo(newsId));
};

function fetchAllNews(newsId: number): Promise<FullNews> {
  return fetch(`${Api}/item/${newsId}.json`).then((res) => res.json());
}

export default useNewsInfo;
