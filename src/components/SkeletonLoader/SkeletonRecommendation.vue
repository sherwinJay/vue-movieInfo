<template>
  <div class="recommendation-column md:!mt-10">
    <AnimationLoader
      width="180px"
      height="20px"
      mobileWidth="120px"
      mobileHeight="12px"
      borderRadius="10px"
    />
    <div class="bg-slate-800 px-3 py-4 flex gap-3 justify-between !mt-3 overflow-hidden">
      <div class="flex flex-col gap-2">
        <AnimationLoader
          width="270px"
          height="150px"
          mobileWidth="150px"
          mobileHeight="80px"
          borderRadius="10px"
        />
        <AnimationLoader
          width="90px"
          height="15px"
          mobileWidth="50px"
          mobileHeight="12px"
          borderRadius="10px"
        />
      </div>
      <div class="flex flex-col gap-2">
        <AnimationLoader
          width="270px"
          height="150px"
          mobileWidth="150px"
          mobileHeight="80px"
          borderRadius="10px"
        />
        <AnimationLoader
          width="90px"
          height="15px"
          mobileWidth="50px"
          mobileHeight="12px"
          borderRadius="10px"
        />
      </div>
      <div class="hidden md:flex flex-col gap-2">
        <AnimationLoader
          width="270px"
          height="150px"
          mobileWidth="150px"
          mobileHeight="80px"
          borderRadius="10px"
        />
        <AnimationLoader
          width="90px"
          height="15px"
          mobileWidth="50px"
          mobileHeight="12px"
          borderRadius="10px"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AnimationLoader from "./AnimationLoader.vue";
</script>

<style scoped>
.recommendation-column {
  grid-row-start: 2;
  grid-row-end: 3;
  grid-column-start: 1;
  grid-column-end: 4;
}
</style>
