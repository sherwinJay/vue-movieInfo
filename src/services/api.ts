import { movieDbURL } from "@/constants/constants";
import type {
  ActorCreditsTypes,
  ActorTypes,
  FetchSearchType,
  MovieDataType,
  RecommendData,
  RecommendedType,
  SearchData,
  SocialMediaAccountsTypes,
} from "@/types/types";
import axios from "axios";

const movieDbKey = import.meta.env.VITE_APP_MOVIE_DATABASE_ID;

export const fetchHomePageMovies = async () => {
  try {
    const response = await axios.get(
      `${movieDbURL}/3/trending/movie/day?api_key=${movieDbKey}&language=en-US&page=1`
    );

    const data = response.data.results;
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchHomePageMoviesTest = async (pathName: string) => {
  try {
    const response = await axios.get(
      `${movieDbURL}/3/${pathName}?api_key=${movieDbKey}&language=en-US&page=1`
    );

    const data = response.data.results;
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

// export const fetchMovieData = async (pageId: string, mediaType: string) => {
//   try {
//     const response = await axios.get(
//       `${movieDbURL}/3/${mediaType}/${pageId}?api_key=${movieDbKey}&append_to_response=credits,videos`
//     );

//     const data = response.data;
//     // console.log(data);
//     return data;
//   } catch (error) {}
// };

export const fetchMovieData = async ({
  pageId,
  mediaType,
}: {
  pageId: string;
  mediaType: string;
}) => {
  try {
    const response = await axios.get(
      `${movieDbURL}/3/${mediaType}/${pageId}?api_key=${movieDbKey}&append_to_response=credits,videos`
    );

    const data = response.data as MovieDataType;
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchRecommendMovies = async ({ pageId, mediaType }: RecommendedType) => {
  try {
    const response = await axios.get(
      `${movieDbURL}/3/${mediaType}/${pageId}/recommendations?api_key=${movieDbKey}&language=en-US&page=1`
    );

    const data = response.data.results as RecommendData[];
    // console.log(data);
    return data;
  } catch (error) {
    console.log("recommended error", error);
    return null;
    // if (error instanceof ServerActionError)
    //   return { success: false, error: error.message }
    // throw error
  }
};

export const fetchPopularMovieData = async () => {
  try {
    const response = await axios.get(
      `${movieDbURL}/3/movie/popular?api_key=${movieDbKey}&language=en-US&page=1`
    );

    const data = response.data.results as MovieDataType[];
    // console.log("popular: ", data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchActorData = async (pageId: string | number) => {
  try {
    const response = await axios.get(`${movieDbURL}/3/person/${pageId}?api_key=${movieDbKey}`);

    const data = response.data as ActorTypes;
    // console.log("actor: ", data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export async function fetchActorSocialMediaData(pageId: string | number) {
  try {
    const response = await axios.get(
      `${movieDbURL}/3/person/${pageId}/external_ids?api_key=${movieDbKey}`
    );

    const data = response.data as SocialMediaAccountsTypes;
    // console.log("social media: ", data);

    return data;
  } catch (error) {
    // console.log(error)
    // throw new Error("Fetch Actor Social media Error")
    // if (error instanceof ServerActionError)
    //   return { success: false, error: error.message }
    throw error;
  }
}

export async function fetchActorCreditsData(pageId: string | number) {
  try {
    const response = await axios.get(
      `${movieDbURL}/3/person/${pageId}/combined_credits?api_key=${movieDbKey}`
    );

    const data = response.data.cast as ActorCreditsTypes[];
    console.log("combined credits: ", data);

    return data;
  } catch (error) {
    // console.log(error)
    // throw new Error("Fetch Actor Social media Error")
    // if (error instanceof ServerActionError)
    //   return { success: false, error: error.message }
    throw error;
  }
}

export async function fetchSearchMovies({ searchValue, signal }: FetchSearchType) {
  const movieApi = `${movieDbURL}/3/search/multi?api_key=${movieDbKey}&language=en-US&query=${searchValue.value}&page=1&include_adult=false`;

  try {
    const response = await axios.get(movieApi, { signal });

    const data = await response.data.results;

    // console.log("search: ", response.data);
    // console.log("url: ", movieApi);
    return data as SearchData[];
  } catch (error) {
    // return []
    console.log(error);
    return null;
  }
}

export const fetchTrending = async () => {
  const movieApi = `${movieDbURL}/3/trending/all/day?api_key=${movieDbKey}&language=en-US`;

  try {
    // const res = await axios.get(movieApi)
    // const trendingLists = await res.data!

    // const response = await fetch(movieApi, { cache: "no-store" })

    // if (!response.ok) {
    //   // This will activate the closest `error.js` Error Boundary
    //   throw new Error("Failed to fetch recommend data")
    // }

    const response = await axios.get(movieApi);

    const trendingList = await response.data;

    // console.log("trending list: ", trendingList);

    return trendingList;
  } catch (error) {
    console.log("trendings error", error);
    return null;
  }
};

export const fetchTrendingTrailers = async ({ pageId, mediaType, signal }: RecommendedType) => {
  const movieApi = `${movieDbURL}/3/${mediaType}/${pageId}/videos?api_key=${movieDbKey}`;

  try {
    // const res = await axios.get(movieApi)
    // const trendingLists = await res.data!

    // const response = await fetch(movieApi, { cache: "no-store" })
    const response = await axios.get(movieApi, { signal });

    // if (!response.ok) {
    //   // This will activate the closest `error.js` Error Boundary
    //   throw new Error("Failed to fetch recommend data")
    // }

    // console.log("trailers: ", response.data);

    // const trendingTrailers = await response.json()
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.log("trending trailers error", error);
    return null;
  }
};
