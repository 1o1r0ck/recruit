// components/NewsItem.tsx
import React from "react";
import { useQuery } from "react-query";
import { FullNews, News } from "../types/types";
import arrow from "../assets/arrow.svg";
import Image from "next/image";
import Link from "next/link";
import styles from "../scss/fullNews.module.scss";

// const fetchNewsItem = (id: number): Promise<FullNews> => {
//   const response =  fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then((res) => res.json());
//   console.log(response)
//   return response;
// };

export const NewsItem = ({ title, time, score, by, id }: News) => {
  // const { data: newsItem } = useQuery(['newsItem', itemId], () => fetchNewsItem(itemId));

  // if (!newsItem) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div>
      <Link href="/">
        <div className={styles.back}>
          <Image
            className={styles.backImg}
            src={arrow}
            width={25}
            height={25}
            alt="Arrow"
          />
          <p className={styles.backTxt}>Back</p>
        </div>
      </Link>

      <div className={styles.main}>
        <div className={styles.mainTitle}> {title} </div>
        <div className={styles.URL}>
          <span>URL: </span>
          {id}
        </div>
        <div className={styles.date}>
          <span>Date: </span>
          {time}
        </div>
        <div className={styles.author}>
          <span>Author: </span>
          {by}
        </div>
      </div>

      <div className={styles.commentsBlock}>
        <div className={styles.commentsCnt}>
          Commentaries: <span> {score} </span>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
