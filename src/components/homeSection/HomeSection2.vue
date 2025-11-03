<template>
  <div></div>
</template>

<script setup lang="ts">
import type { HomeCardData, MediaType } from "@/types/types";
// import { Cards } from "..";
import CardItem from "../cards/CardItem.vue";
import SkeletonHomeThumnails from "../SkeletonLoader/SkeletonHomeThumnails.vue";

type PropsType = {
  title?: string;
  data: HomeCardData[] | undefined;
  isLoading: boolean;
  isError?: boolean;
  template?: "featured" | undefined;
  mediaType: "movie" | "tv";
  // setMediaType(media_type: MediaType): void;
};

const props = defineProps<PropsType>();
</script>

<style scoped></style>
