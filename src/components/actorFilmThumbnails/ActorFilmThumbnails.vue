<script setup lang="ts">
import { movieDbImgURL } from "@/constants/constants";
// import { useGetActorCredits } from "@/services/queries";
import type { ActorCreditsTypes } from "@/types/types";
import { computed, type Ref } from "vue";
import { RouterLink } from "vue-router";
import { MdOutlineImageNotSupported } from "vue-icons-plus/md";
import { ImageComponent } from "..";

type Props = {
  actorData: Ref<ActorCreditsTypes[]> | Ref<undefined>;
};

const props = defineProps<Props>();

// const { data, isLoading } = useGetActorCredits(props.pageId);
const sortedData = computed(() => {
  const dataCopy = props.actorData?.value?.slice() as ActorCreditsTypes[];
  return dataCopy?.sort(
    (a: ActorCreditsTypes, b: ActorCreditsTypes) => b.popularity - a.popularity
  );
});
const movieImage = `${movieDbImgURL}/t/p/w154/`;

const slicedActorCredits = computed(() =>
  sortedData.value
    ?.filter(
      (credit: ActorCreditsTypes) =>
        !credit.character.toLowerCase().includes("self") && credit.character.length > 0
    )
    .filter(
      (item: ActorCreditsTypes, index: number, self: ActorCreditsTypes[]) =>
        index ===
        self.findIndex((other: ActorCreditsTypes) => {
          const otherName = other.name || other.title;
          const itemName = item.name || item.title;
          return otherName === itemName;
        })
    )
    .slice(0, 8)
);
</script>
<template>
  <div class="overflow-x-auto scrollbar-style">
    <ul class="grid grid-cols-08 gap-2.5 md:gap-3 w-[700px] md:w-[1000px] pt-2 pb-5">
      <li v-for="movie in slicedActorCredits" :key="movie.id" class="w-[90px] md:w-[130px]">
        <RouterLink :to="`/${movie.media_type}/${movie.id}`" class="!p-0 group">
          <div
            class="overflow-hidden bg-slate-600 rounded-sm relative flex items-center justify-center border-[1px] border-slate-800"
          >
            <MdOutlineImageNotSupported
              v-if="movie.poster_path === null"
              class="w-[45px] h-[132px] md:h-[192px] opacity-70"
            />
            <!-- <img v-else :src="`${movieImage}/${movie.poster_path}`" class="overflow-hidden !p-0" /> -->

            <ImageComponent
              v-else
              :src="`${movieImage}/${movie.poster_path}`"
              :classProp="`overflow-hidden !p-0 h-[132px] md:h-[192px] lqip-image`"
              :alt="movie.name || movie.title"
            />
          </div>

          <p class="text-white text-xs text-center !mt-2 group-hover:text-emerald-500">
            {{ movie.title || movie.name }}
          </p>
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.grid-cols-08 {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
}
.scrollbar-style {
  scrollbar-width: thin;
  scrollbar-color: #00d492 transparent;
}
</style>
