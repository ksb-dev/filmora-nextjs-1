// styles
import styles from "./Carousel.module.css";

const CarouselText: React.FC<{ data: MediaCard }> = ({ data }): JSX.Element => {
  return (
    <div className={styles.carousel_text}>
      <p>{data.title ? data.title : data.name}</p>
      <p
        style={{
          fontWeight: "400",
          maxWidth: "750px",
          lineHeight: "1.5rem",
        }}
      >
        {data.overview.length < 350
          ? data.overview
          : data.overview.substring(0, 350) + "..."}
      </p>
    </div>
  );
};

export default CarouselText;
