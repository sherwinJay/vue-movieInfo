<template>
  <div>
    <!-- <div @click="goToMovie(parseInt(recommendation.id))" class="!text-white !p-0">
            <div
              v-if="recommendation.backdrop_path === null"
              class="w-[300px] h-[169px] grid place-content-center bg-slate-600"
            >
              <MdOutlineImageNotSupported class="w-[45px] h-[45px] opacity-70" />
            </div>

            <img
              v-else
              :src="`${movieDbImgURL}/t/p/w300${recommendation.backdrop_path}`"
              :alt="recommendation.title"
              loading="lazy"
              class="w-[300px] h-[169px]"
              width="300"
              height="169"
              ref="backgroundImage"
            />
            <p class="px-3 py-3 text-wrapper">
              {{ mediaType === "movie" ? recommendation.title : recommendation.name }}
            </p>
          </div> -->
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<style scoped></style>
