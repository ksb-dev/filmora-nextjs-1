"use client";

import { useState, useEffect, useRef } from "react";

// react icons
import { IoIosArrowForward } from "react-icons/io";
import { AiFillCaretDown } from "react-icons/ai";

// styles
import styles from "./SideNav.module.css";

const SortComponent = () => {
  const [showSortModal, setShowSortModal] = useState<boolean>(false);
  const [sortType, setSortType] = useState<string>("Popularity Descending");
  const [showSortOptions, setShowSortOptions] = useState<boolean>(false);
  const arrowRef = useRef<HTMLSpanElement>(null);

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
                <span>Popularity Descending</span>
                <span>Popularity Ascending</span>
                <span>Rating Descending</span>
                <span>Rating Ascending</span>
                <span>Title (A - Z)</span>
                <span>Title (Z - A)</span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SortComponent;
