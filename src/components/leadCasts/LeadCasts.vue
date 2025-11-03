<script setup lang="ts">
import { movieDbImgURL } from "@/constants/constants";
import type { LeadCastType } from "@/types/types";
import { MdOutlineImageNotSupported } from "vue-icons-plus/md";
import { RouterLink } from "vue-router";
import { ImageComponent } from "..";

const props = defineProps<LeadCastType>();
const casts = props.casts?.slice(0, 10) || [];
</script>

<template>
  <div
    v-if="casts === undefined || casts.length === 0"
    class="bg-slate-800 h-[250px] grid place-content-center"
  >
    <p class="text-white !font-bold text-xl">No Casts</p>
  </div>
  <ul v-else class="grid-cols-010 gap-3 overflow-x-auto scrollbar-style pb-5">
    <li
      v-for="cast in casts"
      :key="cast.id"
      class="rounded-sm overflow-hidden hover:shadow-emerald-700 shadow-md bg-gray-800 w-[125px] md:w-[150px]"
    >
      <RouterLink :to="`/person/${cast.id}`" class="!p-0">
        <div
          class="overflow-hidden bg-slate-600 h-[150px] md:h-[200px] relative flex items-center justify-center"
        >
          <!-- <img
          v-if="cast.profile_path === null"
          src="@/assets/images/no-image.png"
          class="w-[50px] h-[50px] opacity-30"
        /> -->
          <MdOutlineImageNotSupported
            v-if="cast.profile_path === null"
            class="w-[45px] h-[45px] opacity-70"
          />

          <!-- <PiImageBrokenLight
          v-if="cast.profile_path === null"
          class="w-[45px] h-[45px] opacity-70"
        /> -->

          <!-- <img
            v-else
            :src="`${movieDbImgURL}/t/p/w154/${cast.profile_path}`"
            class="absolute translate-x-[-50%] translate-y-[-50%] !top-[50%] !left-[50%] object-cover"
            :alt="cast.name"
            loading="lazy"
          /> -->
          <ImageComponent
            v-else
            :src="`${movieDbImgURL}/t/p/w154/${cast.profile_path}`"
            :classProp="'absolute translate-x-[-50%] translate-y-[-50%] !top-[50%] !left-[50%] object-cover lqip-image'"
            :alt="cast.name"
          />
        </div>
        <div class="py-1.5 md:py-3 px-2">
          <p class="text-xs md:text-sm !font-semibold leading-4 md:leading-4.5 text-emerald-200">
            {{ cast.name }}
          </p>
          <p class="text-white text-[11px] md:text-xs !mt-[2px] leading-4.5">
            {{ cast.character }}
          </p>
        </div>
      </RouterLink>
    </li>
  </ul>
</template>

<style scoped>
.grid-cols-010 {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
}
.scrollbar-style {
  scrollbar-width: thin;
  scrollbar-color: #00d492 transparent;
}
.movie-title {
  color: #fff;
  line-height: 20px;
  margin-top: 10px;
}
</style>
