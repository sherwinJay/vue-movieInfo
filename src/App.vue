<script setup lang="ts">
import { RouterView } from "vue-router";
import { MainFooter, MainHeader } from "./components";
import BaseLayout from "./layouts/BaseLayout.vue";
import { useHead } from "@vueuse/head";
import { computed, reactive } from "vue";

const siteData = reactive({
  title: `MovieInformation`,
  description: "Search movies and tv shows information.",
});

useHead({
  title: computed(() => siteData.title),
  meta: [
    {
      name: "description",
      content: computed(() => siteData.description),
    },
    {
      name: "keywords",
      content: "Movies, TV Shows, Actors, Actresses, User Ratings, Trailers, Cast, Credits, Photos",
    },
  ],
});
</script>

<template>
  <metainfo>
    <template v-slot:title="{ content }">{{
      content ? `${content} | SITE_NAME` : `SITE_NAME`
    }}</template>
  </metainfo>

  <BaseLayout>
    <template v-slot:header>
      <MainHeader />
    </template>
    <template v-slot:default>
      <!-- <div class="flex justify-center"> -->
      <!-- <div class="w-[1200px] py-10"> -->
      <RouterView v-slot="{ Component, route }">
        <component :is="Component" :key="route.fullPath" />
      </RouterView>
      <!-- </div> -->
      <!-- </div> -->
    </template>
    <template v-slot:footer>
      <MainFooter />
    </template>
  </BaseLayout>
</template>

<style scoped></style>
