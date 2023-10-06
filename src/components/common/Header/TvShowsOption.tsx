"use client";

import { useRef } from "react";

// components
import Modal from "./Modal";

// styles
import styles from "./Header.module.css";

const TvShowsOption: React.FC = () => {
  const modalRef = useRef<HTMLDivElement>(null);

  const showModal = () => {
    modalRef.current!.style.display = "flex";
    setTimeout(() => {
      modalRef.current!.style.opacity = "1";
    }, 100);
  };

  const hideModal = () => {
    modalRef.current!.style.opacity = "0";
    setTimeout(() => {
      modalRef.current!.style.display = "none";
    }, 100);
  };

  return (
    <div
      className={styles.tv_option}
      onMouseOver={showModal}
      onMouseLeave={hideModal}
    >
      <span>Tv Shows</span>
      <Modal ref={modalRef} media_type={"tv"} hideModal={hideModal} />
    </div>
  );
};

export default TvShowsOption;
