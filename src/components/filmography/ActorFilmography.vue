<script setup lang="ts">
import type { ActorCreditsTypes } from "@/types/types";
import { computed, ref, type Ref } from "vue";
import { ActorFilmLists } from "..";

type MediaType = "movie" | "tv";
type PropsType = {
  actorData: Ref<ActorCreditsTypes[]> | Ref<undefined>;
};

const mediaType = ref<MediaType>("movie");
const props = defineProps<PropsType>();
const dataSortedByYear = computed(
  () =>
    props.actorData.value
      ?.filter((item: ActorCreditsTypes) => item.character.length > 0)
      .filter(
        (item: ActorCreditsTypes, index: number, self: ActorCreditsTypes[]) =>
          index ===
          self.findIndex((other: ActorCreditsTypes) => {
            const otherName = other.name || other.title;
            const itemName = item.name || item.title;
            return otherName === itemName;
          })
      )
      .filter(
        (item: ActorCreditsTypes) => item.media_type === mediaType.value
      ) as ActorCreditsTypes[]
);

const groupedDataByYear = computed(() =>
  dataSortedByYear.value?.reduce((acc: Record<string, ActorCreditsTypes[]>, data) => {
    const dateStr = data.release_date ?? data.first_credit_air_date;
    if (!dateStr) return acc;

    const year = new Date(dateStr).getFullYear();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(data);
    // console.log(acc);
    return acc;
  }, {})
);

const objectKeys = computed(() =>
  Object.keys(groupedDataByYear.value || {}).sort((a, b) => Number(b) - Number(a))
);

function setMediaType(media_type: "movie" | "tv") {
  mediaType.value = media_type;
}
</script>

<template>
  <div
    className="flex text-sm !mt-5 mb-7 overflow-hidden rounded-full border-[1px] boder-white w-fit"
  >
    <button
      @click="setMediaType('movie')"
      class="py-1.5 px-4 rounded-full cursor-pointer text-xs md:text-sm"
      :class="{ active: mediaType === 'movie' }"
    >
      Movies
    </button>
    <button
      @click="setMediaType('tv')"
      class="py-1.5 px-4 rounded-full cursor-pointer text-xs md:text-sm"
      :class="{ active: mediaType === 'tv' }"
    >
      TV Shows
    </button>
  </div>
  <div class="!mt-7">
    <ul v-if="objectKeys.length > 0">
      <li
        v-for="year in objectKeys"
        :key="year"
        class="flex gap-3 md:gap-5 border-slate-500 border-t-[1px] py-7 text-sm"
      >
        <p class="!font-semibold text-emerald-400 text-xs md:text-sm">{{ year }}</p>
        <ActorFilmLists
          :year="year"
          :mediaType="mediaType"
          :groupedData="groupedDataByYear[year]"
        />
      </li>
    </ul>
    <ul v-else>
      <li class="flex gap-3 md:gap-5 border-slate-500 border-t-[1px] py-7 text-sm">
        <span v-if="mediaType === 'movie'">No Movie</span>
        <span v-else-if="mediaType === 'tv'">No TV Show</span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.active {
  background-color: #096;
  color: #fff;
}
</style>
