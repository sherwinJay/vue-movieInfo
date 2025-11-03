<script setup lang="ts">
import { movieDbImgURL } from "@/constants/constants";
import { useGetTrending } from "@/services/queries";
import type { TrailersProps } from "@/types/types";
import { computed, ref, watch } from "vue";
import MovieTrailerCard from "./MovieTrailerCard.vue";
import SkeletonTrailer from "../SkeletonLoader/SkeletonTrailer.vue";

const { data, isLoading } = useGetTrending();
// const getTrendingTrailer = useGetTrendingTrailers()

// const trendingTrailer = computed(() => data.value?.results as TrailersProps[]);

const sortedTrendingTrailer = computed(
  () =>
    data.value?.results
      ?.slice() // make copy of data
      .sort((a: TrailersProps, b: TrailersProps) => b.popularity - a.popularity) as TrailersProps[]
);
const slicedTrendingTrailer = computed(() => sortedTrendingTrailer.value?.slice(0, 10) || []);
const defaultPath = ref<string | null>(null);
const hoveredPath = defaultPath;

watch(
  slicedTrendingTrailer,
  (trailer) => {
    if (trailer.length > 0 && defaultPath.value === null) {
      defaultPath.value = trailer[0].backdrop_path;
    }
  },
  { immediate: true }
);

function onHover(path: string) {
  hoveredPath.value = path;
}

// console.log(sortedTrendingTrailer);
const baseStyle = computed(() => ({
  backgroundImage:
    hoveredPath.value !== null ? `url(${movieDbImgURL}/t/p/w1280${hoveredPath.value})` : undefined,
}));

console.log(hoveredPath.value);
console.log("trailer: ", slicedTrendingTrailer.value);
</script>

<template>
  <div class="w-full">
    <div v-if="isLoading">
      <SkeletonTrailer />
    </div>
    <div v-else :style="baseStyle" class="test-bg">
      <div class="pt-8 linear-bg flex flex-col items-center">
        <div class="w-full lg:w-[1220px]">
          <h2 class="self-start text-white text-lg md:text-2xl px-5 !font-bold">
            Popular Trailers
          </h2>
          <div class="overflow-x-auto scrollbar-style">
            <ul
              class="grid-cols-07 w-[2100px] lg:w-[3400px] gap-5 px-5 pb-4 lg:pb-12 relative z-10"
            >
              <li
                v-for="trailer in slicedTrendingTrailer"
                :key="trailer.id"
                @mouseover="onHover(trailer.backdrop_path)"
                class="text-center"
              >
                <!-- {{ trailer.name || trailer.title }} -->
                <!-- <ImageComponent
                  :src="`${movieDbImgURL}/t/p/w780/${trailer.backdrop_path}`"
                  :alt="trailer.title || trailer.name"
                /> -->
                <MovieTrailerCard
                  :id="trailer.id"
                  :media_type="trailer.media_type"
                  :title="trailer.title || trailer.name"
                  :backdropPath="trailer.backdrop_path"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.grid-cols-07 {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
}
.scrollbar-style {
  scrollbar-width: thin;
  scrollbar-color: #00d492 transparent;
}
.text-wrapper {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.test-bg {
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  transition: all 0.5s;
}
.linear-bg {
  background-image: linear-gradient(rgba(11, 11, 11, 0.6), rgba(11, 11, 11, 0.4));
}
</style>
