"use client"; // Error components must be Client components

// components / UI
// import ErrorUI from "@/components/UI/ErrorUI/ErrorUI";

// styles
import styles from "./page.module.css";

interface Props {
  error: Error;
  reset: () => void;
}

const Error: React.FC<Props> = ({ error, reset }) => {
  return (
    <div className={styles.container}>
      {/* <ErrorUI error={error} reset={reset} /> */}
      Error
    </div>
  );
};

export default Error;
