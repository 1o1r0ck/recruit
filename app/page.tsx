"use client";

import "../app/scss/normalize.scss";
import { NewsCard } from "./components/newsCard";
import { News } from "./types/types";
import { useNews } from "@/hooks/useNews";
import styles from "./scss/main.module.scss";

export default function Home() {
  const { data, isLoading } = useNews()
  if (isLoading) {
    return <div className={styles.loading}>Загрузка данных...</div>;
  }

  // console.log(data)

  return (
    <>
      <div className={styles.wrapper}>
        {data.map((news) => (
          <NewsCard
            key={news.id}
            title={news.title}
            by={news.by}
            id={news.id}
            time={news.time}
            score={news.score}
          />
        ))}
      </div>
    </>
  );
}
