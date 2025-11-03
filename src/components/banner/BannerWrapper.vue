<script setup lang="ts">
import { movieDbImgURL } from "@/constants/constants";
import { ref, computed } from "vue";
import { useBackgroundAnalyze } from "@/composables/useBackgroundColor.ts";
import type { BannerWrapperType } from "@/types/types";
import BannerIconsWrapper from "./BannerIconsWrapper.vue";
import BannerCrews from "./BannerCrews.vue";
import { MdOutlineImageNotSupported } from "vue-icons-plus/md";
// import { ImageComponent } from "..";
// import { Image } from "@unpic/vue";

const props = defineProps<BannerWrapperType>();
const posterImage = ref(null);
const posterImageUrl = `${movieDbImgURL}/t/p/w500${props.posterUrl}`;

const backdropUrl = props.backdropUrl;
const bannerBG = ref({
  backgroundImage: "",
});
const isColorLight = ref(false);
const backgroundAnalyze = () =>
  useBackgroundAnalyze(posterImage, isColorLight, bannerBG, backdropUrl);
// Genres
const genres = computed(() => props.genres?.map((genre: { name: string }) => genre?.name)) ?? [];
const stringGenres = genres.value?.slice(0, 3).toString().replace(/,/g, ", ");
//  Date
const modifiedReleaseDate = props.releaseDate !== null ? props.releaseDate?.replace(/-/g, "/") : "";

const directors = props.crews?.filter(
  (crew) => crew.job === "Director" || crew.job === "Screenplay"
);
</script>

<template>
  <div :style="bannerBG" class="bg-cover bg-center bg-no-repeat bg-slate-700">
    <div
      class="flex justify-center md:px-4 lg:px-0"
      :class="isColorLight ? 'text-black' : 'text-white'"
    >
      <div class="w-full lg:w-[1200px] py-5 md:py-10 flex md:gap-5 px-4 md:px-0">
        <div v-if="props.posterUrl === null" class="bg-slate-800 rounded-sm">
          <div class="w-[350px] h-[525px] hidden md:grid place-content-center">
            <MdOutlineImageNotSupported class="w-[45px] h-[45px] opacity-70" />
          </div>
        </div>
        <div v-else-if="props.posterUrl">
          <img
            crossorigin="anonymous"
            :alt="props.showTitle"
            ref="posterImage"
            id="posterId"
            :src="posterImageUrl"
            @load="backgroundAnalyze"
            class="w-0 md:w-[350px] !rounded-lg lg:min-w-[350px] border-[1px] border-slate-800/15"
            loading="lazy"
            type="image/webp"
          />
          <!-- <ImageComponent
            :crossorigin="'anonymous'"
            :alt="props.showTitle"
            ref="posterImage"
            id="posterId"
            :src="posterImageUrl"
            @load="backgroundAnalyze"
            :classProp="'w-0 md:w-[350px] !rounded-lg lg:min-w-[350px] lqip-image'"
          /> -->
        </div>

        <div class="py-3">
          <h1 class="text-2xl md:text-4xl !font-bold">{{ props.showTitle }}</h1>
          <div class="flex gap-1 md:gap-2 !mt-1 md:!mb-2 items-center text-xs md:text-base">
            <p
              class="text-[9px] md:text-[12px] text-white md:!font-semibold bg-emerald-600 px-1 md:px-2 py-0.5 rounded-full"
            >
              {{ modifiedReleaseDate }} (US)
            </p>
            <span>|</span>
            <p class="md:!font-semibold">{{ stringGenres }}</p>
          </div>
          <!-- Banner icons component -->
          <BannerIconsWrapper
            :runtime="props.runtime"
            :voteAverage="props.voteAverage"
            :trailer="props.videos?.results[0]?.key"
            mediaType="movie"
          />
          <!-- content starts here -->
          <div class="md:!mt-2">
            <p class="text-sm md:text-lg !font-semibold">{{ props.tagline }}</p>
            <p class="text-[12px] md:text-base">{{ props.overview }}</p>
          </div>
          <ul
            v-if="props.mediaType === 'movie'"
            class="grid grid-cols-3 md:grid-cols-4 gap-4 md:gap-5 !mt-3 md:!mt-5"
          >
            <!-- content for Movie page -->
            <li v-for="crew in directors" :key="crew.id">
              <BannerCrews :name="crew.name" :job="crew.job" :id="crew.id" />
            </li>
          </ul>
          <ul
            v-else-if="props.mediaType === 'tv'"
            class="grid grid-cols-3 md:grid-cols-4 gap-4 md:gap-5 !mt-3 md:!mt-5"
          >
            <!-- content for TV page -->
            <li v-for="creator in props.creator" :key="creator.id">
              <BannerCrews :name="creator.name" job="Creator" :id="creator.id" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
