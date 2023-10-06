"use client";

import Link from "next/link";

import moment from "moment";

// components
import MediaCardImage from "./MediaCardImage";
import ProgressBar from "./ProgressBar";

// styles
import styles from "./MediaCard.module.css";

interface Props {
  mediaInfo: MediaCard;
  mediaType?: string | undefined;
}

const MediaCard: React.FC<Props> = ({ mediaInfo, mediaType }): JSX.Element => {
  const {
    id,
    poster_path,
    release_date,
    first_air_date,
    title,
    name,
    vote_average,
  } = mediaInfo;

  return (
    <div className={styles.media_card_container}>
      <Link href="#" className={styles.media_card_link}>
        <div className={styles.image_container}>
          <MediaCardImage
            poster_path={poster_path}
            title={title ? title : name}
          />
          <ProgressBar vote_average={vote_average} />
        </div>

        <div className={styles.title_date_div}>
          <span className={styles.title}>
            {title
              ? title.length < 30
                ? title
                : title.substring(0, 30) + " ..."
              : name!.length < 30
              ? name
              : name!.substring(0, 30) + " ..."}
          </span>
          <span className={styles.date}>
            {release_date && moment(release_date).format("Do MMM, YYYY")}
            {first_air_date && moment(first_air_date).format("Do MMM, YYYY")}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default MediaCard;
