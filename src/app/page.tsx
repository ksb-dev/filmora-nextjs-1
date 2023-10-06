"use client";

import { useState, useEffect } from "react";

// lib
import { getTrendingToday } from "@/lib/getTrendingToday";

// components
import Carousel from "@/components/Carousel/Carousel";
import TrendingOptions from "@/components/UI/TrendingOptions/TrendingOptions";
import MediaCard from "@/components/MediaCard/MediaCard";
import Loading from "./loading";

// styles
import styles from "./page.module.css";

const Home = () => {
  const [today, setToday] = useState<boolean>(true);
  const [trending, setTrending] = useState<MediaCard[]>([]);
  const [index, setIndex] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    setLoading(true);

    getTrendingToday(`${today ? "day" : "week"}`)
      .then((res) => {
        setTrending(res.results);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        setError("Failed to fetch data!, 404");
      });
  }, [today]);

  return (
    <main className={styles.container}>
      <Carousel trending={trending} index={index} setIndex={setIndex} />

      <div className={styles.inner_container}>
        <TrendingOptions
          today={today}
          setToday={setToday}
          setIndex={setIndex}
        />

        {loading && <Loading />}

        <div className={styles.media_list}>
          {!loading &&
            !error &&
            trending.map((data: MediaCard) => (
              <MediaCard
                key={data.id}
                mediaInfo={data}
                mediaType={data.media_type}
              />
            ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
