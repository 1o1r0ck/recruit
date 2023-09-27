"use client";

import React from "react";
import styles from "../../scss/fullNews.module.scss";
import arrow from "../../assets/arrow.svg";
import Image from "next/image";
import Link from "next/link";
import { FullNews } from "../../types/types";
import { useRouter, useSearchParams } from "next/navigation";
import { useQuery } from "react-query";

import NewsItem from "@/app/components/newsItem";
import { useNews } from "@/hooks/useNews";
import NewsApi from "../../../api/news";




export default function FullNews() {


  // const { data, isLoading } = NewsApi.getById()
  // if (isLoading) {
  //   return <div className={styles.loading}>Загрузка данных...</div>;
  // }


  return (
    <div className={styles.wrapper}>

    {data.map((news: any) => (
          <NewsItem
            key={news.id}
            title={news.title}
            by={news.by}
            id={news.id}
            time={news.time}
            score={news.score}
          />
        ))}
      {/* <Link href="/">
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
      </div> */}
    </div>
  );
}
