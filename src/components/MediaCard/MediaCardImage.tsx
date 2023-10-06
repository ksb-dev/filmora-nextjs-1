import Image from "next/legacy/image";

// styles
import styles from "./MediaCard.module.css";

const url =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";
const IMG_PATH = "https://image.tmdb.org/t/p/w342";

interface Props {
  poster_path: string;
  title: string | undefined;
}

const MediaCardImage: React.FC<Props> = ({
  poster_path,
  title,
}): JSX.Element => {
  return (
    <Image
      src={poster_path === null ? url : IMG_PATH + poster_path}
      blurDataURL={poster_path === null ? url : IMG_PATH + poster_path}
      placeholder="blur"
      alt={title}
      layout="fill"
      objectFit="cover"
      loading="eager"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      className={styles.image}
      priority
    />
  );
};

export default MediaCardImage;
