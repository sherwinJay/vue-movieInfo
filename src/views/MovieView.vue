<script setup lang="ts">
import { getMovieData } from "@/services/queries";
import { useRoute } from "vue-router";
import { LeadCasts, BannerWrapper, MovieSidebar, RecommendedLists } from "../components";
import MoviePageLayout from "../layouts/MoviePageLayout.vue";
import { computed } from "vue";
import SkeletonMovieBanner from "@/components/SkeletonLoader/SkeletonMovieBanner.vue";
import SkeletonLeadCast from "@/components/SkeletonLoader/SkeletonLeadCast.vue";
import SkeletonSidebar from "@/components/SkeletonLoader/SkeletonSidebar.vue";
import SkeletonRecommendation from "@/components/SkeletonLoader/SkeletonRecommendation.vue";
import { useHead } from "@vueuse/head";

const route = useRoute();
const pageId = route.params.id as string;
const { data, isLoading } = getMovieData(pageId, "movie");
// userData.value = data;
const computeBudget = computed(() => data.value?.budget.toLocaleString());
const budget = computed(() =>
  data.value?.budget !== undefined && data.value?.budget > 0 ? `$ ${computeBudget.value}` : "-"
);

const computeRevenue = computed(() => data.value?.revenue.toLocaleString());
const revenue = computed(() =>
  data.value?.revenue !== undefined && data.value?.revenue > 0 ? `$ ${computeRevenue.value}` : "-"
);

useHead({
  title: computed(() => (data.value ? `${data.value.title}  - MovieInformation` : "")),
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
        :showTitle="data?.title"
        :genres="data?.genres"
        :releaseDate="data?.release_date"
        mediaType="movie"
        :runtime="data?.runtime"
        :voteAverage="data?.vote_average"
        :tagline="data?.tagline"
        :overview="data?.overview"
        :videos="data?.videos"
        :crews="data?.credits.crew"
      />
    </template>
    <template v-slot:leadCast>
      <LeadCasts v-if="data!.credits.cast.length > 0" :casts="data?.credits.cast" />
    </template>
    <template v-slot:sidebar>
      <div>
        <h4 class="text-sm md:text-base !font-bold text-emerald-400">Budget</h4>
        <p>{{ budget }}</p>
      </div>
      <div>
        <h4 class="text-sm md:text-base !font-bold text-emerald-400">Revenue</h4>
        <p>{{ revenue }}</p>
      </div>
      <MovieSidebar
        :status="data?.status"
        :productionCompanies="data?.production_companies"
        mediaType="movie"
        :crews="data?.credits.crew"
      />
    </template>
    <template v-slot:recommendations>
      <RecommendedLists mediaType="movie" />
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
