<script setup lang="ts">
// import { getHomePageMoviesTest } from "@/services/queries";
import type { HomeCardData, MediaType } from "@/types/types";
// import { Cards } from "..";
import CardItem from "../cards/CardItem.vue";
import SkeletonHomeThumnails from "../SkeletonLoader/SkeletonHomeThumnails.vue";
import SkeletonInTheares from "../SkeletonLoader/SkeletonInTheares.vue";
// import { computed } from "vue";

type PropsType = {
  title?: string;
  data: HomeCardData[] | undefined;
  isLoading: boolean;
  isError?: boolean;
  template: "featured" | "trending";
  mediaType?: "movie" | "tv";
  // setMediaType(media_type: MediaType): void;
};

const props = defineProps<PropsType>();

const emit = defineEmits(["setMediaType"]);

// const dynamicClass = computed(() => ({

// }))
const templateVariant = {
  trending:
    "grid-cols-10 min-h-[190px] w-[1050px] pb-10 md:pb-7 lg:pb-10 lg:w-[1850px] lg:min-h-[330px]",
  featured:
    "grid-custom-row-3 leading-2 grid-cols-4 min-h-[250px] md:grid-cols-5 md:grid-rows-2 md:min-h-[360px]",
};

// const imageSrc = props.template ==="featured" ? props

// const { data, isLoading, isError } = getHomePageMoviesTest();
// console.log(props);
function handleMediaType(media_type: MediaType) {
  emit("setMediaType", media_type);
}
</script>
<template>
  <section class="py-3 md:py-5">
    <span v-if="isLoading">
      <SkeletonInTheares v-if="props.template === 'featured'" />
      <SkeletonHomeThumnails v-else />
    </span>
    <div v-else class="md:px-4 lg:px-0">
      <div class="flex items-center gap-5 !mb-4">
        <h2 class="!font-bold text-white text:lg md:text-2xl">{{ props.title }}</h2>
        <div
          className="flex text-sm overflow-hidden rounded-full border-[1px] boder-white w-fit text-white"
          v-if="props.template === 'trending'"
        >
          <button
            @click="handleMediaType('tv')"
            class="py-1.5 px-4 rounded-full cursor-pointer text-xs md:text-sm"
            :class="{ active: mediaType === 'tv' }"
          >
            TV Shows
          </button>
          <button
            @click="handleMediaType('movie')"
            class="py-1.5 px-4 rounded-full cursor-pointer text-xs md:text-sm"
            :class="{ active: mediaType === 'movie' }"
          >
            Movies
          </button>
        </div>
      </div>

      <div class="overflow-x-auto scrollbar-style overflow-y-hidden">
        <ul class="grid gap-[0.4rem] md:gap-3" :class="templateVariant[template]">
          <li
            v-for="movie in data"
            :key="movie.id"
            class="pb-5 relative"
            :class="{ featured_card: template === 'featured' }"
          >
            <CardItem
              :imageSrc="template === 'featured' ? movie.backdrop_path : movie.poster_path"
              :title="movie.title"
              :name="movie.name"
              :link="movie.id"
              :mediaType="props.mediaType"
              :template="props.template"
            />
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<style lang="css" scoped>
.scrollbar-style {
  scrollbar-width: thin;
  scrollbar-color: #00d492 transparent;
}
.active {
  background-color: #096;
  color: #fff;
}
.grid-custom-row-3 {
  grid-template-rows: repeat(3, 117px);
  grid-auto-rows: 0 !important; /* Set height of auto-generated rows to 0 */
  overflow-y: hidden !important;

  @media screen and (min-width: 769px) {
    grid-template-rows: repeat(2, 172px);
  }
}
.featured_card:first-child {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;

  @media screen and (min-width: 769px) {
    grid-column-end: 3;
  }
}
.featured_card:nth-child(n + 8) {
  display: none;
}

.featured_card {
  padding: 0;
}
</style>
