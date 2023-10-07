"use client";

import { useState, useEffect, useRef } from "react";

// react icons
import { IoIosArrowForward } from "react-icons/io";

// styles
import styles from "./SideNav.module.css";

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
        className={styles.title_div}
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
      {showGenreModal && <div className={styles.options_div}>Options</div>}
    </div>
  );
};

export default GenreComponent;
