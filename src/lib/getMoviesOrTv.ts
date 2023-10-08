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
  const baseUrl = "https://api.themoviedb.org/3";
  const language = "en-US";

  // let sort = ''

  // if (category === 'popular') {
  //   sort = "popularity.desc";
  // }

  let url;

  //api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc'

  if (category === "now_playing" && mediaType === "tv") {
    url = `${baseUrl}/${mediaType}/on_the_air?api_key=${apiKey}&language=${language}&page=${page}`;
  } else if (category === "upcoming" && mediaType === "tv") {
    url = `${baseUrl}/${mediaType}/airing_today?api_key=${apiKey}&language=${language}&page=${page}`;
  } else {
    url = `${baseUrl}/${mediaType}/${category}?api_key=${apiKey}&language=${language}&page=${page}`;
  }

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
