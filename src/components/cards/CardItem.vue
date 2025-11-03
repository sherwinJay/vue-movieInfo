<script setup lang="ts">
import { movieDbImgURL } from "@/constants/constants";
import type { CardPropType } from "@/types/types";
// import { ref } from "vue";
import { ImageComponent } from "..";
// import { ref } from "vue";
// import { computed } from "vue";
// const loaded = ref(false);
const props = defineProps<CardPropType>();

const imageSize = props.template === "featured" ? "780" : "342";
const movieImage = `${movieDbImgURL}/t/p/w${imageSize}/${props.imageSrc}`;
// const cardTtile = computed(() => (props.title ? props.title : props.name));
const cardTtile = props.title ? props.title : props.name;

const isFeaturedTemplate = props.template === "featured";

// function onMainLoaded() {
//   loaded.value = true;
// }

// console.log(loaded.value);
</script>
<template>
  <RouterLink :to="`/${props.mediaType}/${props.link}`" class="!p-0 group">
    <div class="rounded-md overflow-hidden h-[100%] relative">
      <ImageComponent
        :src="movieImage"
        :alt="cardTtile"
        :classProp="[
          'absolute translate-x-[-50%] translate-y-[-50%] !top-[50%] !left-[50%] object-cover border-[1px] border-slate-800 lqip-image rounded-md',
          isFeaturedTemplate ? 'h-full' : '',
        ]"
      />
    </div>
    <p
      class="movie-title text-[11px] !leading-[14px] md:!leading-5 md:text-sm !font-semibold md:!font-bold group-hover:!text-emerald-400"
    >
      {{ cardTtile }}
    </p>
  </RouterLink>
</template>

<style scoped>
.movie-title {
  color: #fff;
  line-height: 20px;
  margin-top: 5px;
  margin-left: 5px;
}
.featured_card .movie-title {
  position: absolute;
  bottom: 5px;
  z-index: 2;
  text-shadow: #333 1px 1px 2px;
}
.featured_card:first-child .movie-title {
  font-size: 17px;
  bottom: 10px;
  left: 3px;
  @media screen and (min-width: 769px) {
    font-size: 20px;
  }
}
</style>
