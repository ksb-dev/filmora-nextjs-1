// components
import SortComponent from "./SortComponent";

// styles
import styles from "./SideNav.module.css";

const SideNav = () => {
  return (
    <div className={styles.side_nav}>
      <SortComponent />
    </div>
  );
};

export default SideNav;
