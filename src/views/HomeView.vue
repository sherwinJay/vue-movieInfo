<script setup lang="ts">
import { HomeSection, MovieSlider, MovieTrailer } from "@/components";
import { getHomePageMoviesTest } from "@/services/queries";
import type { MediaType } from "@/types/types";
// import type { HomeCardData } from "@/types/types";
// import { getHomePageMovies } from "@/services/queries";
import { computed, ref } from "vue";

// type TrendingDataType = ComputedRef<HomeCardData[] | undefined>;
// type MediaType = "movie" | "tv";
const { data, isLoading, isError } = getHomePageMoviesTest();
// console.log(trendingMovies.fetchStatus);
const inTheatreMovie = computed(() =>
  data.value?.inTheatre
    .slice(0, 7)
    .sort((a, b) => Date.parse(b.release_date) - Date.parse(a.release_date))
);
const trendingTVShows = computed(() => data.value?.trendingTV.slice(0, 10));
const trendingMovies = computed(() => data.value?.trendingMovie.slice(0, 10));

const mediaType = ref<MediaType>("tv");

function setMediaType(media_type: MediaType) {
  mediaType.value = media_type;
}
</script>

<template>
  <main class="w-full bg-[#181818]">
    <div class="text-white">
      <MovieSlider />
    </div>

    <div class="flex flex-col justify-center items-center">
      <div class="w-full px-4 md:px-0 lg:w-[1200px] py-5">
        <HomeSection
          :data="inTheatreMovie"
          :isLoading="isLoading"
          :isError="isError"
          title="In Theatres"
          template="featured"
          mediaType="movie"
        />
      </div>
      <MovieTrailer />

      <div class="w-full px-4 md:px-0 lg:w-[1200px] py-5">
        <HomeSection
          v-if="mediaType === 'movie'"
          :data="trendingMovies"
          :isLoading="isLoading"
          :isError="isError"
          title="Trending"
          template="trending"
          mediaType="movie"
          @setMediaType="setMediaType"
        />
        <HomeSection
          v-else-if="mediaType === 'tv'"
          :data="trendingTVShows"
          :isLoading="isLoading"
          :isError="isError"
          title="Trending"
          template="trending"
          mediaType="tv"
          @setMediaType="setMediaType"
        />
      </div>
    </div>
  </main>
</template>
