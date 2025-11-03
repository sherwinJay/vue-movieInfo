import { useQuery } from "@tanstack/vue-query";
import {
  fetchActorCreditsData,
  fetchActorData,
  fetchActorSocialMediaData,
  fetchHomePageMovies,
  fetchHomePageMoviesTest,
  fetchMovieData,
  fetchPopularMovieData,
  fetchRecommendMovies,
  fetchSearchMovies,
  fetchTrending,
  fetchTrendingTrailers,
} from "./api";
import type { HomeCardData } from "@/types/types";
import { computed, type Ref } from "vue";
// import process from "node:process";

// const movieDbURL = "https://api.themoviedb.org";
// const movieDbKey = import.meta.env.VITE_APP_MOVIE_DATABASE_ID;

export function getHomePageMovies() {
  return useQuery({
    queryKey: ["trendings", "movies"],
    queryFn: async () => await fetchHomePageMovies(),
    staleTime: 1000,
  });
}

export function getHomePageMoviesTest() {
  return useQuery({
    queryKey: ["trendings", "trendingTV", " popularMovies"],
    queryFn: async () => {
      const [trendingMovie, inTheatre, trendingTV] = await Promise.all<HomeCardData[]>([
        fetchHomePageMoviesTest(`trending/movie/day`),
        fetchHomePageMoviesTest(`movie/popular`),
        fetchHomePageMoviesTest(`trending/tv/week`),
      ]);

      return {
        trendingMovie,
        inTheatre,
        trendingTV,
      };
    },
    staleTime: 1000,
  });
}

// export function getMovieData(pageId: string, mediaType: string) {
//   return useQuery({
//     queryKey: [{ pageId }],
//     queryFn: async () => await fetchMovieData(pageId, mediaType),
//     staleTime: 1000,
//   });
// }

export function getMovieData(pageId: string, mediaType: string) {
  return useQuery({
    queryKey: ["movie_data", { pageId }],
    queryFn: async () => await fetchMovieData({ pageId, mediaType }),
    staleTime: 1000,
  });
}

// export function getPopularMovies(url: string) {
//   return useQuery({
//     queryKey: ["popularMovies", { url }],
//     queryFn: async () => await fetchHomePageMovies(url),
//     staleTime: 1000,
//   });
// }

export function getRecommendations(pageId: string | number, mediaType: string) {
  return useQuery({
    queryKey: ["recommendations", { pageId, mediaType }],
    queryFn: async () => await fetchRecommendMovies({ pageId, mediaType }),
    staleTime: 1000,
  });
}

export function getPopularMovieData() {
  return useQuery({
    queryKey: [],
    queryFn: async () => await fetchPopularMovieData(),
    staleTime: 1000,
  });
}

export function useGetActorData(pageId: string | number) {
  return useQuery({
    queryKey: ["actor", { pageId }],
    queryFn: async () => await fetchActorData(pageId),
    staleTime: 1000,
  });
}

export function useSocialMediaAccount(pageId: string | number) {
  return useQuery({
    queryKey: ["social_media", { pageId }],
    queryFn: async () => await fetchActorSocialMediaData(pageId),
    staleTime: 1000,
  });
}

export function useGetActorCredits(pageId: string | number) {
  return useQuery({
    queryKey: ["actor_credits", pageId],
    queryFn: async () => await fetchActorCreditsData(pageId),
    staleTime: 1000,
  });
}

export function useGetSearchMovies(
  searchValue: Ref<string, string>,
  debounced: Readonly<Ref<string, string>>
) {
  return useQuery({
    queryKey: computed(() => ["search", debounced.value]),
    queryFn: ({ signal }) => fetchSearchMovies({ searchValue, signal }),
    staleTime: 10000,
  });
}

export function useGetTrending() {
  return useQuery({
    queryKey: ["trendings"],
    queryFn: async () => await fetchTrending(),
    staleTime: 1000,
  });
}

export function useGetTrendingTrailers(pageId: string | number, mediaType: string) {
  return useQuery({
    queryKey: ["trendings", { pageId, mediaType }],
    queryFn: async () => await fetchTrendingTrailers({ pageId, mediaType }),
    staleTime: 1000,
  });
}
