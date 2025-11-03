<script setup lang="ts">
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, EffectCreative, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { getPopularMovieData } from "@/services/queries";
import { computed } from "vue";
import { movieDbImgURL } from "@/constants/constants";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { RouterLink } from "vue-router";
import SkeletonSlider from "../SkeletonLoader/SkeletonSlider.vue";

const modules = [Autoplay, EffectCreative, Pagination, Navigation];

// Import Swiper styles

// const onSwiper = (swiper: any) => {
//   console.log(swiper);
// };

const { data, isLoading } = getPopularMovieData();

const sliderData = computed(() => data.value?.slice(0, 5));
// const onSlideChange = () => {
//   console.log("slide change");
// };
// const progressCircle = ref(null);
// const progressContent = ref(null);
// const onAutoplayTimeLeft = (s, time, progress) => {
//   progressCircle.value.style.setProperty("--progress", 1 - progress);
//   progressContent.value.textContent = `${Math.ceil(time / 1000)}s`;
// };
</script>

<template>
  <div v-if="isLoading">
    <SkeletonSlider />
  </div>
  <swiper
    v-else
    class="mySwiper"
    :modules="modules"
    :slides-per-view="1"
    loop
    :autoplay="{ delay: 5000, disableOnInteraction: false }"
    navigation
    :pagination="{ clickable: true }"
    :effect="'creative'"
    :creativeEffect="{
      prev: {
        shadow: true,
        translate: [0, 0, -600],
      },
      next: {
        translate: ['100%', 0, 0],
      },
    }"
  >
    <swiper-slide
      class="bg-test w-full !h-[300px] md:!h-[500px]"
      :style="{ backgroundImage: `url(${movieDbImgURL}/t/p/original${slider.backdrop_path})` }"
      v-for="slider in sliderData"
      :key="slider.id"
    >
      <div class="linear-bg grid place-content-center h-full">
        <div class="text-wrapper w-full px-4 md:px-0 md:w-[800px]">
          <!-- <img :src="`${movieDbImgURL}/t/p/original${slider.backdrop_path}`" :alt="slider.title" /> -->
          <h2 class="text-center text-2xl md:text-4xl !font-bold !mb-3 md:!mb-5">
            {{ slider.title }}
          </h2>
          <p class="text-center text-xs md:text-base">{{ slider.overview }}</p>
          <RouterLink
            :to="`/movie/${slider.id}`"
            class="text-center text-xs md:text-base flex self-center justify-self-center bg-emerald-600 rounded-md !text-white !px-3 !py-1 !mt-4 hover:bg-emerald-700"
          >
            see information
          </RouterLink>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<style scoped>
.bg-test {
  background-size: cover;
  background-position: center;
  width: 100%;
}
.text-wrapper {
  margin: 0 auto;
}
.linear-bg {
  background-image: linear-gradient(rgba(11, 11, 11, 0.6), rgba(11, 11, 11, 0.2));
}
.swiper-pagination-bullet {
  background: green !important;
}
.swiper-pagination-bullet-active {
  opacity: var(--swiper-pagination-bullet-opacity, 1) --swiper-pagination-bullet-opacity is not
    defined;
  background: #00bd7e !important;
}
.swiper-pagination-bullet {
  background: green !important;
}
.swiper-pagination-bullet-active {
  opacity: var(--swiper-pagination-bullet-opacity, 1) --swiper-pagination-bullet-opacity is not
    defined;
  background: #00bd7e !important;
}
.swiper-button-next,
.swiper-rtl .swiper-button-prev {
  color: #00bd7e !important;
  background: #00bd7e !important;
}
.swiper-button-next:after,
.swiper-rtl .swiper-button-prev:after {
  color: #00bd7e !important;
}
</style>
