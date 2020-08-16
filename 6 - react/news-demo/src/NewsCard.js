import React from "react";
import styles from "./newscard.module.css";

const NewsCard = ({ data }) => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{data.title}</p>
      <div className={styles.thumbnailDescriptionWrapper}>
        <img
          src={data.urlToImage}
          className={styles.thumbnail}
          alt="thumbnail"
        />
        <p className={styles.description}>{data.description}</p>
      </div>
      <div className={styles.authorSourceWrapper}>
        <p className={styles.source}>Source - {data.source.name}</p>
        <p className={styles.author}>Author - {data.author}</p>
      </div>
    </div>
  );
};

export default NewsCard;
