"use client";

import { useState, useEffect, useRef } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

// react icons
import { IoIosArrowForward } from "react-icons/io";

// styles
import styles from "./GenreComponent.module.css";

const GenreComponent = () => {
  const [showGenreModal, setShowGenreModal] = useState<boolean>(true);
  const [mediaType, setMediaType] = useState<string>("");
  const arrowRef = useRef<HTMLSpanElement>(null);

  const pathname = usePathname();

  useEffect(() => {
    setMediaType("");

    let url = pathname.split("/");

    setMediaType(url[2]);
  }, [pathname]);

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
          <Link href={`/pages/${mediaType}/action/1`}>Action</Link>
          <Link href={`/pages/${mediaType}/adventure/1`}>Adventure</Link>
          <Link href={`/pages/${mediaType}/animation/1`}>Animation</Link>
          <Link href={`/pages/${mediaType}/comedy/1`}>Comedy</Link>
          <Link href={`/pages/${mediaType}/acrime/1`}>Crime</Link>
          <Link href={`/pages/${mediaType}/documentary/1`}>Documentary</Link>
          <Link href={`/pages/${mediaType}/drama/1`}>Drama</Link>
          <Link href={`/pages/${mediaType}/family/1`}>Family</Link>
          <Link href={`/pages/${mediaType}/fantasy/1`}>Fantasy</Link>
          <Link href={`/pages/${mediaType}/history/1`}>History</Link>
          <Link href={`/pages/${mediaType}/horror/1`}>Horror</Link>
          <Link href={`/pages/${mediaType}/music/1`}>Music</Link>
          <Link href={`/pages/${mediaType}/mystery/1`}>Mystery</Link>
          <Link href={`/pages/${mediaType}/romance/1`}>Romance</Link>
          <Link href={`/pages/${mediaType}/sciene_fiction/1`}>
            Science Fiction
          </Link>
          <Link href={`/pages/${mediaType}/tv_movie/1`}>TV Movie</Link>
          <Link href={`/pages/${mediaType}/thriller/1`}>Thriller</Link>
          <Link href={`/pages/${mediaType}/war/1`}>War</Link>
          <Link href={`/pages/${mediaType}/western/1`}>Western</Link>
        </div>
      )}
    </div>
  );
};

export default GenreComponent;
