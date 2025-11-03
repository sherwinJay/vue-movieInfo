<script setup lang="ts">
import type { BannerIconsType } from "@/types/types";
import useCircleRating from "@/composables/useCircleRating";
import { computed } from "vue";
import { Fa6Clock } from "vue-icons-plus/fa6";
import { BsFillPlayCircleFill } from "vue-icons-plus/bs";
import BannerIcon from "./BannerIcon.vue";

const props = defineProps<BannerIconsType>();

const votes = props.voteAverage ?? 0;
const displayVotes = votes > 0 ? votes.toFixed(1) : "NR";
const { circleBorder } = useCircleRating(votes);

const runtime = props.runtime ?? 0;
const computedRuntime = computed(() => {
  const computeHours = Math.floor(runtime / 60);
  const computeMinutes = runtime % 60;
  return computeHours >= 1 ? `${computeHours}h ${computeMinutes}m` : `${computeMinutes}m`;
});
</script>

<template>
  <div class="flex items-center gap-2 md:gap-7 py-4">
    <BannerIcon class="gap-1 text-sm md:text-base">
      <span :style="circleBorder">
        {{ displayVotes }}
      </span>
      <span class="!font-semibold w-[45px] md:w-[89px] text-xs md:text-base">User Rating</span>
    </BannerIcon>
    <BannerIcon :title="computedRuntime" class="gap-1.5 text-xs md:text-base">
      <Fa6Clock class="w-8 h-8 bg-[#0c0b20] rounded-full p-[2px]" color="#00d492" />
    </BannerIcon>
    <a
      v-if="props.trailer"
      :href="`https://www.youtube.com/watch?v=${props.trailer}`"
      target="_blank"
      class="hover:!bg-transparent !text-inherit hover:!text-[#00BD7E]"
    >
      <BannerIcon title="Play Trailer" class="gap-1.5 text-xs md:text-base">
        <BsFillPlayCircleFill class="w-8 h-8 bg-[#0c0b20] rounded-full p-[2px]" color="#00d492" />
      </BannerIcon>
    </a>
  </div>
</template>

<style scoped></style>
