import Link from "next/link";

// style s
import styles from "./Title.module.css";

const Title: React.FC = async () => {
  return (
    <Link href="/" className={styles.title}>
      TMDb
      <span className={styles.span}></span>
    </Link>
  );
};

export default Title;
