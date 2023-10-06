import { Metadata } from "next";

// lib
import { getMoviesOrTv } from "@/lib/getMoviesOrTv";

// components
import MediaCard from "@/components/MediaCard/MediaCard";
// import Pagination from "@/components/Pagination/Pagination";

// styles
import styles from "./page.module.css";

const genresArray = [
  { id: 28, name: "action" },
  { id: 12, name: "adventure" },
  { id: 16, name: "animation" },
  { id: 35, name: "comedy" },
  { id: 80, name: "crime" },
  { id: 99, name: "documentary" },
  { id: 18, name: "drama" },
  { id: 10751, name: "family" },
  { id: 14, name: "fantasy" },
  { id: 36, name: "history" },
  { id: 27, name: "horror" },
  { id: 10402, name: "music" },
  { id: 9648, name: "mystery" },
  { id: 10749, name: "romance" },
  { id: 878, name: "science_fiction" },
  { id: 10770, name: "tv_Movie" },
  { id: 53, name: "thriller" },
  { id: 10752, name: "war" },
  { id: 37, name: "western" },
];

interface Params {
  params: {
    media_type: string;
    category: string;
    page: number;
  };
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  // let type =
  //   params.media_type.charAt(0).toUpperCase() + params.media_type.substring(1);

  if (params.category === "top_rated")
    return {
      title: `Filmora | Top Rated  ${
        params.media_type === "movie" ? "Movies" : "Shows"
      }`,
    };

  let category =
    params.category.charAt(0).toUpperCase() + params.category.substring(1);

  return {
    title: `Filmora | ${category} ${
      params.media_type === "movie" ? "Movies" : "Shows"
    }`,
  };
}

export default async function Home({ params }: Params) {
  const { media_type, category, page } = params;

  let title = "";
  // category === "top_rated"
  //   ? (title = "Top Rated")
  //   : (title = category.charAt(0).toUpperCase() + category.substring(1));

  category === "top_rated"
    ? (title = "Top Rated")
    : category === "now_playing"
    ? (title = "Now Playing")
    : (title = category.charAt(0).toUpperCase() + category.substring(1));

  const data = await getMoviesOrTv(category, page, media_type, title);

  return (
    <main className={styles.container}>
      <div className={styles.inner_container}>
        <div className={styles.nav}>Nav</div>

        <div className={styles.category_list}>
          <p className={styles.category_text}>
            {title} {media_type === "movie" ? "Movies" : "Shows"}
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
