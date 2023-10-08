import { Metadata } from "next";

// lib
import { getMoviesOrTv } from "@/lib/getMoviesOrTv";

// components
import SideNav from "@/components/common/SideNav/SideNav";
import MediaCard from "@/components/MediaCard/MediaCard";
// import Pagination from "@/components/Pagination/Pagination";

// styles
import styles from "../../../page.module.css";

interface Params {
  params: {
    media_type: string;
    category: string;
    page: number;
  };
}

const genresArray = new Map([
  ["action", 28],
  ["adventure", 12],
  ["animation", 16],
  ["comedy", 35],
  ["crime", 80],
  ["documentary", 99],
  ["drama", 18],
  ["family", 10751],
  ["fantasy", 14],
  ["history", 36],
  ["horror", 27],
  ["music", 10402],
  ["mystery", 9648],
  ["romance", 10749],
  ["science_fiction", 878],
  ["tv_movie", 10770],
  ["thriller", 53],
  ["war", 10752],
  ["western", 37],
]);

const getTitle = (category: string, media_type: string) => {
  let title = "";

  if (category === "now_playing" && media_type === "movie") {
    title = "Now Playing";
  } else if (category === "now_playing" && media_type === "tv") {
    title = "Currently Airing TV Shows";
  } else if (category === "upcoming" && media_type === "tv") {
    title = "TV Shows Airing Today";
  } else if (category === "top_rated") {
    title = "Top Rated";
  } else if (category === "sciene_fiction") {
    title = "Science Fiction";
  } else if (category === "tv_movie") {
    title = "TV";
  } else {
    title = category.charAt(0).toUpperCase() + category.substring(1);
  }
  return title;
};

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { category, media_type } = params;
  let title = getTitle(category, media_type);

  return {
    title: `Filmora | ${title} ${
      params.media_type === "movie" ? "Movies" : "Tv Shows"
    }`,
  };
}

export default async function Page({ params }: Params) {
  let { media_type, category, page } = params;

  let title = getTitle(category, media_type);

  if (
    category !== "popular" &&
    category !== "now_playing" &&
    category !== "upcoming" &&
    category !== "top_rated"
  ) {
    category = String(genresArray.get(category));
  }

  const data = await getMoviesOrTv(category, page, media_type, title);

  return (
    <main className={styles.container}>
      <div className={styles.inner_container}>
        <SideNav />

        <div className={styles.category_list}>
          <p className={styles.category_text}>
            {title}{" "}
            {media_type === "movie"
              ? "Movies"
              : title !== "TV Shows Airing Today" &&
                title !== "Currently Airing TV Shows" &&
                "Tv Shows"}
          </p>
          <div className={styles.media_list}>
            {data!.results.map((info: MediaCard) => (
              <MediaCard key={info.id} mediaInfo={info} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
