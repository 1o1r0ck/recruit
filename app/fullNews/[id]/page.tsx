"use client";

import React from "react";
import styles from "../../scss/fullNews.module.scss";
import arrow from "../../assets/arrow.svg";
import Image from "next/image";
import Link from "next/link";
import { FullNews } from "../../types/types";
import { useRouter, useSearchParams } from "next/navigation";
import { useQuery } from "react-query";
import useNewsInfo from "@/app/lib/useNewsInfo";
const Api = "https://hacker-news.firebaseio.com/v0";
import { useLatestNews } from "../../lib/useLatestNews";
import NewsItem from "@/app/components/newsItem";

// import { useRouter } from 'next/router';

// const fetchStory = async (id: number) => {
//   return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(
//     (res) => res.json()
//   );
// };

export default function FullNews() {
  // const searchParams = useSearchParams();
  // const idSearch = searchParams.get("id");

  // const { data: story } = useQuery(
  //   ["story", idSearch],
  //   () => fetchStory(Number(idSearch)),
  //   {
  //     enabled: !!idSearch,
  //   }
  // );

  // if (!story) {
  //   return <div>Loading...</div>;
  // }

  // const router = useRouter();
  // const searchParams = useSearchParams();
  // const itemId = searchParams.get('id');

  return (
    <div className={styles.wrapper}>
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
        <div className={styles.mainTitle}> Title </div>
        <div className={styles.URL}>
          <span>URL: </span>https://news.ycombinator.com/news
        </div>
        <div className={styles.date}>
          <span>Date: </span>21-07-2023
        </div>
        <div className={styles.author}>
          <span>Author: </span>Author
        </div>
      </div>

      <div className={styles.commentsBlock}>
        <div className={styles.commentsCnt}>
          Commentaries: <span> 12 </span>
        </div>
      </div>
    </div>
  );
}
