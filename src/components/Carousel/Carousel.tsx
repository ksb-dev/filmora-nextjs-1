import { useState, useEffect, useRef } from "react";

import Link from "next/link";

// components
import CarouselImage from "./CarouselImage";
import CarouselText from "./CarouselText";

// react icons
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";

// styles
import styles from "./Carousel.module.css";

interface Props {
  trending: MediaCard[];
  index: number;
  setIndex: (value: number | ((value: number) => number)) => void;
}

const Carousel: React.FC<Props> = ({ trending, index, setIndex }) => {
  const [play, setPlay] = useState<boolean>(false);
  let timeoutRef = useRef<any>(null);
  const carouselInnerRef = useRef<HTMLDivElement>(null);
  // Math.floor(Math.random() * 20)

  useEffect(() => {
    if (play) {
      const timeOut = setTimeout(() => {
        if (index < 19) {
          setIndex((prevIndex: number) => prevIndex + 1);
        } else {
          setIndex(0);
        }
      }, 5000);
      return () => clearInterval(timeOut);
    }
  }, [play, index, setIndex]);

  useEffect(() => {
    carouselInnerRef.current!.style.opacity = "1";

    if (play) {
      carouselInnerRef.current!.style.opacity = "1";
      timeoutRef.current = setTimeout(() => {
        carouselInnerRef.current!.style.opacity = "0.25";
      }, 4000);
    }
  }, [play, index]);

  const handlePlay = () => {
    setPlay(!play);

    clearTimeout(timeoutRef.current);
    carouselInnerRef.current!.style.opacity = "1";
  };

  return (
    <div className={styles.carousel}>
      <div className={styles.carousel_inner} ref={carouselInnerRef}>
        {trending && trending[index] && (
          <CarouselImage trending={trending} index={index} />
        )}
        <div className={styles.carousel_cover}>
          {trending && trending[index] && (
            <CarouselText data={trending[index]} />
          )}
        </div>
      </div>

      {trending.length > 1 && play ? (
        <button
          className={styles.play_button}
          onClick={handlePlay}
          aria-label="Pause"
        >
          <span className={styles.pause_icon}>
            <BsFillPauseFill />
          </span>
        </button>
      ) : (
        <button
          className={styles.play_button}
          onClick={handlePlay}
          aria-label="Play"
        >
          <span className={styles.play_icon}>
            <BsFillPlayFill />
          </span>
        </button>
      )}

      {trending.length > 1 && (
        <div className={styles.image_index}>
          {index + 1} / {trending.length}
        </div>
      )}
    </div>
  );
};

export default Carousel;
