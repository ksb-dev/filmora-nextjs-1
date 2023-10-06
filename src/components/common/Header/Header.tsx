// components
import Title from "@/components/UI/Title/Title";
import MoviesOption from "./MoviesOption";
import TvShowsOption from "./TvShowsOption";

// styles
import styles from "./Header.module.css";

const Header: React.FC = () => {
  //useHandleScroll(headerRef, headerInnerRef);

  return (
    <header className={styles.header}>
      <div className={styles.header_inner}>
        <div className={styles.title_options_div}>
          <Title />
          <MoviesOption />
          <TvShowsOption />
        </div>
        <div>options</div>
      </div>
    </header>
  );
};

export default Header;
