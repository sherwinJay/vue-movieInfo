<script setup lang="ts">
import { getMovieData } from "@/services/queries";
import { useRoute } from "vue-router";
import { LeadCasts, BannerWrapper, MovieSidebar, RecommendedLists } from "../components";
import MoviePageLayout from "../layouts/MoviePageLayout.vue";
import SkeletonMovieBanner from "@/components/SkeletonLoader/SkeletonMovieBanner.vue";
import SkeletonLeadCast from "@/components/SkeletonLoader/SkeletonLeadCast.vue";
import SkeletonSidebar from "@/components/SkeletonLoader/SkeletonSidebar.vue";
import SkeletonRecommendation from "@/components/SkeletonLoader/SkeletonRecommendation.vue";
import { useHead } from "@vueuse/head";
import { computed } from "vue";

const route = useRoute();
const pageId = route.params.id as string;
const { data, isLoading } = getMovieData(pageId, "tv");

useHead({
  title: computed(() => (data.value ? `${data.value.name}  - MovieInformation` : "")),
  meta: [
    {
      name: "description",
      content: computed(() => data.value?.overview),
    },
  ],
});
</script>

<template>
  <MoviePageLayout :isLoading="isLoading">
    <template v-slot:loader>
      <div v-if="isLoading" class="">
        <SkeletonMovieBanner />
        <div class="flex justify-center">
          <div class="md:w-[1200px] py-6 md:py-10 w-full !px-5 two-column flex flex-col gap-8">
            <SkeletonLeadCast />
            <SkeletonSidebar />
            <SkeletonRecommendation />
          </div>
        </div>
      </div>
    </template>
    <template v-slot:banner>
      <BannerWrapper
        :backdropUrl="data?.backdrop_path"
        :posterUrl="data?.poster_path"
        :showTitle="data?.name"
        :genres="data?.genres"
        :releaseDate="data?.first_air_date"
        mediaType="tv"
        :runtime="data?.episode_run_time[0]"
        :voteAverage="data?.vote_average"
        :tagline="data?.tagline"
        :overview="data?.overview"
        :videos="data?.videos"
        :creator="data?.created_by"
      />
    </template>
    <template v-slot:leadCast>
      <LeadCasts v-if="data!.credits.cast.length > 0" :casts="data?.credits.cast" />
    </template>
    <template v-slot:sidebar>
      <div>
        <h4 class="text-base !font-bold text-emerald-400">Original Name</h4>
        <p>{{ data?.original_name }}</p>
      </div>
      <!-- <div>
        <h4 class="text-base !font-bold text-emerald-400">Number of Seasons</h4>
        <p>
          {{ data?.number_of_seasons }} {{ data!.number_of_seasons > 1 ? "seasons" : "season" }}
        </p>
      </div> -->
      <div>
        <h4 class="text-base !font-bold text-emerald-400">Total Episodes</h4>
        <p>{{ data?.number_of_episodes }} episodes</p>
      </div>
      <MovieSidebar
        :status="data?.status"
        :productionCompanies="data?.production_companies"
        mediaType="tv"
        :crews="data?.credits.crew"
      />
    </template>
    <template v-slot:recommendations>
      <RecommendedLists mediaType="tv" />
    </template>
  </MoviePageLayout>
</template>

<style scoped>
@media (width >= 48rem /* 768px */) {
  .two-column {
    display: grid;
    grid-template-rows: repeat(2, minmax(0, 1fr));
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 25px;
  }
}
</style>
