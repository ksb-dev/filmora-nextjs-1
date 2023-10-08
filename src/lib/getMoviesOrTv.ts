import moment from "moment";

interface Props {
  page: number;
  results: MediaCard[];
  total_pages: number;
  total_results: number;
}

export async function getMoviesOrTv(
  category: string,
  page: number,
  media_type: string,
  title: string
): Promise<Props> {
  const mediaType = media_type === "movie" ? "movie" : "tv";
  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;
  const baseUrl = "https://api.themoviedb.org/3/discover";
  const language = "en-US";
  const today = moment(Date.now()).format("YYYY-MM-DD");

  let url = "";
  let sort = "";

  if (category === "popular") {
    sort = "popularity.desc";
  } else if (category === "now_playing") {
    sort = `popularity.desc&with_release_type=2|3&region=US,IN&release_date.gte=${today}&release_date.lte=${today}`;
  } else if (category === "upcoming") {
    sort = `popularity.desc&with_release_type=2|3&region=US,IN&release_date.gte=${today}`;
  } else {
    sort = "vote_average.desc&without_genres=99,10755&vote_count.gte=200";
  }

  if (
    category !== "popular" &&
    category !== "now_playing" &&
    category !== "upcoming" &&
    category !== "top_rated"
  ) {
    sort = `vote_count.desc&with_genres=${category}`;
  }

  url = `${baseUrl}/${mediaType}?api_key=${apiKey}&language=${language}S&page=1&sort_by=${sort}&page=${page}&include_adult=false&include_video=false`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(
        `Failed to fetch ${title} ${media_type}! ${response.status}`
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
