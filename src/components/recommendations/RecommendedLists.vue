<script setup lang="ts">
import { movieDbImgURL } from "@/constants/constants";
import { getRecommendations } from "@/services/queries";
import { computed, ref, watch } from "vue";
import { MdOutlineImageNotSupported } from "vue-icons-plus/md";
import { useRoute } from "vue-router";
import { ImageComponent } from "..";
import SkeletonRecommendation from "../SkeletonLoader/SkeletonRecommendation.vue";

type PropsType = {
  mediaType: "movie" | "tv";
};

const route = useRoute();
const pageId = route.params.id as string;
const props = defineProps<PropsType>();

const { data, isLoading } = getRecommendations(pageId, props.mediaType);

const recommendations = computed(() => data.value?.slice(0, 7) || []);

const defaultPath = ref<string | null>(null);
const hoveredPath = defaultPath;

// Set defaultPath as the first recommendation when it becomes available
watch(
  recommendations,
  (rocommends) => {
    if (rocommends.length > 0 && defaultPath.value === null) {
      defaultPath.value = rocommends[0].backdrop_path;
    }
  },
  { immediate: true }
);

function onHover(path: string) {
  hoveredPath.value = path;
}

const baseStyle = computed(() => ({
  backgroundImage:
    hoveredPath.value !== null ? `url(${movieDbImgURL}/t/p/w1280${hoveredPath.value})` : undefined,
}));
</script>

<template>
  <span v-if="isLoading">
    <SkeletonRecommendation />
  </span>
  <div v-else>
    <div
      v-if="recommendations?.length === 0"
      class="bg-slate-800 h-[250px] grid place-content-center"
    >
      <p class="text-white !font-bold text-xl">No Recommendations</p>
    </div>
    <section v-else :style="baseStyle" class="test-bg">
      <ul
        class="grid-cols-07 gap-5 px-5 py-10 overflow-x-auto scrollbar-style relative z-10 linear-bg"
      >
        <li
          v-for="recommendation in recommendations"
          :key="recommendation.id"
          class="w-[230px] md:w-[300px] bg-slate-800 overflow-hidden rounded-sm"
          @mouseover="onHover(recommendation.backdrop_path)"
        >
          <RouterLink
            :to="`/${props.mediaType}/${recommendation.id}`"
            class="!text-white !p-0 group"
          >
            <div
              v-if="recommendation.backdrop_path === null"
              class="w-[230px] h-[130px] md:w-[300px] md:h-[169px] grid place-content-center bg-slate-600"
            >
              <MdOutlineImageNotSupported class="w-[45px] h-[45px] opacity-70" />
            </div>

            <ImageComponent
              v-else
              :src="`${movieDbImgURL}/t/p/w300${recommendation.backdrop_path}`"
              :alt="recommendation.title"
              :classProp="`lqip-image`"
              ref="backgroundImage"
            />
            <p class="p-2 md:p-3 text-xs md:text-sm text-wrapper group-hover:text-emerald-400">
              {{ mediaType === "movie" ? recommendation.title : recommendation.name }}
            </p>
          </RouterLink>
        </li>
      </ul>
    </section>
  </div>
</template>

<style scoped>
.grid-cols-07 {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
}
.scrollbar-style {
  scrollbar-width: thin;
  scrollbar-color: #00d492 transparent;
}
.text-wrapper {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.test-bg {
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  transition: all 0.5s;
}
.linear-bg {
  background-image: linear-gradient(rgba(11, 11, 11, 0.6), rgba(11, 11, 11, 0.2));
}
</style>
