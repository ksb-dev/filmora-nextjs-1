"use client";

import { useState, useEffect, useRef } from "react";

import Link from "next/link";

// react icons
import { IoIosArrowForward } from "react-icons/io";
import { AiFillCaretDown } from "react-icons/ai";

// styles
import styles from "./SideNav.module.css";

const SortComponent = () => {
  const [showSortModal, setShowSortModal] = useState<boolean>(true);
  const [sortType, setSortType] = useState<string>("Popularity Descending");
  const [showSortOptions, setShowSortOptions] = useState<boolean>(false);
  const [mediaType, setMediaType] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const arrowRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    setMediaType("");
    setCategory("");
    let url = window.location.pathname.split("/");
    setMediaType(url[2]);
    setCategory(url[3]);
  }, []);

  useEffect(() => {
    if (showSortModal) {
      arrowRef.current!.style.transform = "rotate(90deg)";
    } else {
      arrowRef.current!.style.transform = "rotate(0deg)";
    }
  }, [showSortModal]);

  return (
    <div className={styles.sort_container}>
      <div
        className={styles.title_div}
        onClick={() => {
          setShowSortModal(!showSortModal);
          setShowSortOptions(false);
        }}
      >
        <span className={styles.sort_text}>Sort</span>
        <span ref={arrowRef} className={styles.sort_icon}>
          <IoIosArrowForward />
        </span>
      </div>
      {showSortModal && (
        <div className={styles.options_div}>
          Sort results by
          <div className={styles.options_div_inner}>
            <div
              className={styles.sort_type_div}
              onClick={() => setShowSortOptions(!showSortOptions)}
            >
              <span className={styles.sort_type_text}>{sortType}</span>
              <span>
                <AiFillCaretDown />
              </span>
            </div>
            {showSortOptions && (
              <div className={styles.sort_type_options_div}>
                <Link
                  href={`/pages/${mediaType}/${category}/sort/popularity.desc/1`}
                >
                  Popularity Descending
                </Link>
                <Link
                  href={`/pages/${mediaType}/${category}/sort/popularity.asc/1`}
                >
                  Popularity Ascending
                </Link>
                <Link
                  href={`/pages/${mediaType}/${category}/sort/vote_average.desc/1`}
                >
                  Rating Descending
                </Link>
                <Link
                  href={`/pages/${mediaType}/${category}/sort/vote_average.asc/1`}
                >
                  Rating Ascending
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SortComponent;
