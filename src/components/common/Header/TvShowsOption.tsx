"use client";

import { useRef } from "react";

// hooks
import { useToggleMediaOptionModal } from "@/hooks/useToggleMediaOptionModal";

// components
import OptionsModal from "./OptionsModal";

// styles
import styles from "./Header.module.css";

const TvShowsOption: React.FC = () => {
  const modalRef = useRef<HTMLDivElement>(null);
  const { showModal, hideModal } = useToggleMediaOptionModal(modalRef);

  return (
    <div
      className={styles.tv_option}
      onMouseOver={showModal}
      onMouseLeave={hideModal}
    >
      <span>Tv Shows</span>
      <OptionsModal ref={modalRef} media_type={"tv"} hideModal={hideModal} />
    </div>
  );
};

export default TvShowsOption;
