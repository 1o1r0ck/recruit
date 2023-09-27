import React from "react";
import styles from "../scss/main.module.scss";
import { News } from "../types/types";
import Link from "next/link";

export const NewsCard = ({ title, time, score, by, id }: News) => {
  const getDate = (timestamp: number): Date => {
    return new Date(timestamp * 1000);
  };

  const timestamp: number = time;
  const date: Date = getDate(timestamp);
  let fromUnix = date.toISOString().slice(0, -14);

  return (
    <div className={styles.newsContainer}>
      <div className={styles.upTitle}>
        <h2> {title} </h2>
        <p> Author: {by} </p>
        <p> {id} </p>
      </div>

      <div className={styles.bottomTitle}>
        <p> Publication date: {fromUnix} </p>
        <p> Rating: {score} </p>
      </div>
      <div className={styles.bottomButton}>
        <Link href={`../fullNews/${id}`}>
          <button> Read more... </button>
        </Link>
      </div>
    </div>
  );
};
