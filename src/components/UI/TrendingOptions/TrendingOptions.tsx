import { Dispatch, SetStateAction, useRef } from "react";

// styles
import styles from "./trendingOptions.module.css";

interface Props {
  today: boolean;
  setToday: Dispatch<SetStateAction<boolean>>;
  setIndex: (value: number) => void;
}

const TrendingOptions: React.FC<Props> = ({
  today,
  setToday,
  setIndex,
}): JSX.Element => {
  const switchRef = useRef<HTMLSpanElement>(null);

  const switchTrending = () => {
    if (today) {
      switchRef.current!.style.transform = "translateX(-101%)";
      setToday(false);
      setIndex(0);
    } else {
      switchRef.current!.style.transform = "translateX(-199%)";
      setToday(true);
      setIndex(0);
    }
  };

  return (
    <div className={styles.trending_options_container} onClick={switchTrending}>
      <p className={styles.trending_text}>Trending</p>
      <div className={styles.trending_options}>
        <span>Today</span>
        <span>Weekly</span>
        <span ref={switchRef}>{today ? "Today" : "Weekly"}</span>
      </div>
    </div>
  );
};

export default TrendingOptions;
