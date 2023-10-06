"use client";

import { useRef } from "react";

import Link from "next/link";

// hooks
import { useHandleScroll } from "@/hooks/useHandleScroll";

// components
import Title from "@/components/UI/Title/Title";
import MoviesOption from "./MoviesOption";
import TvShowsOption from "./TvShowsOption";

// styles
import styles from "./Header.module.css";

const Header: React.FC = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInnerRef = useRef<HTMLDivElement>(null);
  useHandleScroll(headerRef, headerInnerRef);

  return (
    <header ref={headerRef} className={styles.header}>
      <div ref={headerInnerRef} className={styles.header_inner}>
        <div className={styles.title_options_div}>
          <Title />
          <MoviesOption />
          <TvShowsOption />
          <Link href="#" className={styles.people_option}>
            People
          </Link>
        </div>
        <div>options</div>
      </div>
    </header>
  );
};

export default Header;
