// Circular progress bar
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

// styles
import styles from "./MediaCard.module.css";

const ProgressBar: React.FC<{ vote_average: number }> = ({ vote_average }) => {
  const getClassBg = (vote: any) => {
    if (vote >= 7.5) {
      return "greenBg";
    } else if (vote >= 5) {
      return "orangeBg";
    } else {
      return "redBg";
    }
  };

  return (
    <div className={styles.vote}>
      <CircularProgressbar
        value={vote_average * 10}
        strokeWidth={7}
        styles={buildStyles({
          pathColor:
            vote_average < 5
              ? "tomato"
              : vote_average >= 7.5
              ? "#1FAC66"
              : "var(--c1)",
        })}
      />
      <span className={styles.vote_text}>
        {Number(String(vote_average).substring(0, 3))}
      </span>
    </div>
  );
};

export default ProgressBar;
