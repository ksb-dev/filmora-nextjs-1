// components
import SortComponent from "./SortComponent";
import GenreComponent from "./GenreComponent";

// styles
import styles from "./SideNav.module.css";

const SideNav: React.FC = () => {
  return (
    <div className={styles.side_nav}>
      <SortComponent />
      <GenreComponent />
    </div>
  );
};

export default SideNav;
