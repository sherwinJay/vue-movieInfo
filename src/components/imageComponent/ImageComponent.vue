<template>
  <img
    :src="src"
    :alt="alt"
    :class="[classProp, { 'loaded-image': loaded }]"
    loading="lazy"
    @load="onMainLoaded"
    type="image/webp"
    :crossorigin="crossorigin"
  />
</template>

<script setup lang="ts">
import { ref } from "vue";

type PropsType = {
  src: string;
  alt?: string;
  classProp?: string | string[];
  crossorigin?: "anonymous";
};
defineProps<PropsType>();

const loaded = ref(false);

function onMainLoaded() {
  loaded.value = true;
}
</script>

<style scoped>
.lqip-image {
  background-image: url("{{ movieImage.lqip }}");
  background-size: cover;
  filter: blur(20px);
  transition: filter 0.2s ease-out;
}
.lqip-image.loaded-image {
  filter: none;
}
</style>
