import Image from "next/legacy/image";

// styles
import styles from "./Carousel.module.css";

const url =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

interface Props {
  trending: MediaCard[];
  index: number;
}

const CarouselImage: React.FC<Props> = ({ trending, index }): JSX.Element => {
  return (
    <div className={styles.carousel_image}>
      <Image
        src={
          trending[index].backdrop_path === null
            ? url
            : IMG_PATH + trending[index].backdrop_path
        }
        blurDataURL={
          trending[index].backdrop_path === null
            ? url
            : IMG_PATH + trending[index].backdrop_path
        }
        placeholder="blur"
        alt={
          trending[index].title ? trending[index].title : trending[index].name
        }
        layout="fill"
        objectFit="cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className={styles.image}
        style={{
          borderBottomLeftRadius: "var(--border-radius-1)",
          borderBottomRightRadius: "var(--border-radius-1)",
        }}
      />
    </div>
  );
};

export default CarouselImage;
