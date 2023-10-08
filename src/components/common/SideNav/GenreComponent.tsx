"use client";

import { useState, useEffect, useRef } from "react";

// react icons
import { IoIosArrowForward } from "react-icons/io";

// styles
import styles from "./GenreComponent.module.css";

const GenreComponent = () => {
  const [showGenreModal, setShowGenreModal] = useState<boolean>(true);
  const arrowRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (showGenreModal) {
      arrowRef.current!.style.transform = "rotate(90deg)";
    } else {
      arrowRef.current!.style.transform = "rotate(0deg)";
    }
  }, [showGenreModal]);

  return (
    <div className={styles.genre_container}>
      <div
        className={styles.genre_title_div}
        onClick={() => {
          setShowGenreModal(!showGenreModal);
          //setShowSortOptions(false);
        }}
      >
        <span className={styles.genre_text}>Genres</span>
        <span ref={arrowRef} className={styles.genre_icon}>
          <IoIosArrowForward />
        </span>
      </div>
      {showGenreModal && (
        <div className={styles.genre_options_div}>
          <span>Action</span>
          <span>Adventure</span>
          <span>Animation</span>
          <span>Comedy</span>
          <span>Crime</span>
          <span>Documentary</span>
          <span>Drama</span>
          <span>Family</span>
          <span>Fantasy</span>
          <span>History</span>
          <span>Horror</span>
          <span>Music</span>
          <span>Mystery</span>
          <span>Romance</span>
          <span>Science Fiction</span>
          <span>TV Movie</span>
          <span>Thriller</span>
          <span>War</span>
          <span>Western</span>
        </div>
      )}
    </div>
  );
};

export default GenreComponent;
