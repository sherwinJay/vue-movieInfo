<script setup lang="ts">
import { useGetTrendingTrailers } from "@/services/queries";
import type { TrailerType } from "@/types/types";
import { computed } from "vue";
import { ImageComponent } from "..";
import { movieDbImgURL } from "@/constants/constants";
// import { AiOutlinePlayCircle } from "vue-icons-plus/ai";
import { BsPlay } from "vue-icons-plus/bs";

type PropsType = {
  id: number | string;
  media_type: "movie" | "tv";
  title: string;
  backdropPath?: string;
};

const props = defineProps<PropsType>();

const { data, isLoading } = useGetTrendingTrailers(props.id, props.media_type);

const trendingTrailer = computed(() =>
  data.value.results.filter((trailer: TrailerType) => trailer.type === "Trailer")
);

const movieImage = `${movieDbImgURL}/t/p/w780/${props.backdropPath}`;

// const trendingTrailer = getTrendingTrailerQuery?.data?.results.filter(
//   (trailer: TrailerType) => trailer.type === "Trailer"
// );

// console.log(trendingTrailer);
// console.log(props.backdropPath);
</script>

<template>
  <div>
    <div v-if="isLoading">
      <p>loading...</p>
    </div>
    <a
      v-else
      :href="`https://www.youtube.com/watch?v=${trendingTrailer[0]?.key}`"
      target="_blank"
      class="text-center group !text-white relative"
    >
      <ImageComponent
        :src="movieImage"
        :alt="title"
        class="w-[186px] h-[104px] lg:w-[380px] !mb-2 lg:h-[169px] rounded-md shadow-lg shadow-black/20 scale-100 group-hover:scale-105 transition delay-50 duration-150 ease-in-out"
      />
      {{ title }}
      <!-- <AiOutlinePlayCircle class="absolute top-[45%] left-0 w-8 h-8 lg:w-10 lg:h-10" /> -->
      <BsPlay
        class="absolute top-[40%] left-[-15px] w-8 h-8 lg:w-10 lg:h-10 border-[1px] rounded-full p-1 scale-95 group-hover:scale-120 transition delay-50 duration-150 ease-in-out"
      />
    </a>
  </div>
</template>

<style scoped></style>
