// styles
import styles from "./footer.module.css";

const Footer: React.FC = async () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_inner}>Footer</div>
    </footer>
  );
};

export default Footer;
