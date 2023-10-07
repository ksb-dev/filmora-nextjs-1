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

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  if (params.category === "top_rated")
    return {
      title: `Filmora | Top Rated  ${
        params.media_type === "movie" ? "Movies" : " Tv Shows"
      }`,
    };

  let category =
    params.category.charAt(0).toUpperCase() + params.category.substring(1);

  return {
    title: `Filmora | ${category} ${
      params.media_type === "movie" ? "Movies" : "Tv Shows"
    }`,
  };
}

export default async function Page({ params }: Params) {
  const { media_type, category, page } = params;

  // Assign Title
  let title = "";

  if (category === "now_playing" && media_type === "movie") {
    title = "Now Playing";
  } else if (category === "now_playing" && media_type === "tv") {
    title = "Currently Airing TV Shows";
  } else if (category === "upcoming" && media_type === "tv") {
    title = "TV Shows Airing Today";
  } else if (category === "top_rated") {
    title = "Top Rated";
  } else {
    title = category.charAt(0).toUpperCase() + category.substring(1);
  }

  // Fetch Data
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
