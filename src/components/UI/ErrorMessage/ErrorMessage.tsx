// styles
import styles from "./error.module.css";

const ErrorMessage: React.FC<ErrorMessage> = ({
  error,
  reset,
}): JSX.Element => {
  return (
    <div>
      <p className={styles.error_text}>{error.message}</p>
      <p className="mb-[1rem] text-[var(--blue)] text-[1.1rem]">
        Check your internet connection.
      </p>
      <button onClick={() => reset()} className={styles.try_btn}>
        Try Again
      </button>
    </div>
  );
};
export default ErrorMessage;
