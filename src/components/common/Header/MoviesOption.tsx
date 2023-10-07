"use client";

import React, { useRef } from "react";

// hooks
import { useToggleMediaOptionModal } from "@/hooks/useToggleMediaOptionModal";

// components
import OptionsModal from "./OptionsModal";

// styles
import styles from "./Header.module.css";

const MoviesOption: React.FC = () => {
  const modalRef = useRef<HTMLDivElement>(null);
  const { showModal, hideModal } = useToggleMediaOptionModal(modalRef);

  return (
    <div
      className={styles.movie_option}
      onMouseOver={showModal}
      onMouseLeave={hideModal}
    >
      <span>Movies</span>
      <OptionsModal ref={modalRef} media_type={"movie"} hideModal={hideModal} />
    </div>
  );
};

export default MoviesOption;
