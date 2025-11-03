<script setup lang="ts">
import type { ActorCreditsTypes } from "@/types/types";
import { computed } from "vue";

type Props = {
  year: string;
  mediaType: "movie" | "tv";
  groupedData: ActorCreditsTypes[];
};

const props = defineProps<Props>();

const sortData = computed(() => {
  const dataCopy = props.groupedData.slice();
  return dataCopy?.sort((a: ActorCreditsTypes, b: ActorCreditsTypes) => {
    const releaseDateA =
      props.mediaType === "movie" ? new Date(a.release_date) : new Date(a.first_air_date);
    const releaseDateB =
      props.mediaType === "movie" ? new Date(b.release_date) : new Date(b.first_air_date);

    return Number(releaseDateB) - Number(releaseDateA);
  });
});
</script>

<template>
  <div v-if="sortData.length > 0" class="flex flex-col gap-2.5">
    <div v-for="data in sortData" :key="data.credit_id">
      <RouterLink :to="`/${data.media_type}/${data.id}`" class="!p-0 group">
        <p class="!font-bold text-white group-hover:text-emerald-500 text-xs md:text-sm">
          {{ data.title || data.name }}
        </p>
        <!-- <p
            v-else
            class="!font-semibold text-white group-hover:text-emerald-500 text-xs md:text-sm"
          >
            No Show
          </p> -->
        <p class="pl-2.5 text-white text-xs md:text-sm">
          as {{ data.character }}
          <span v-if="data.media_type === 'tv'" class="text-slate-300 !ml-1 !font-extralight">
            ({{ data.episode_count }} {{ data.episode_count > 1 ? "episodes" : "episode" }})
          </span>
        </p>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped></style>
