<template>
  <div
    class="wrapper !h-[300px] md:!h-[500px] flex flex-col gap-2.5 justify-center items-center bg-slate-700"
  >
    <div class="slider-title !mb-1">
      <AnimationLoader
        width="180px"
        height="20px"
        mobileWidth="120px"
        mobileHeight="15px"
        borderRadius="10px"
      />
    </div>
    <div class="slider-content flex flex-col gap-2">
      <AnimationLoader
        width="600px"
        height="15px"
        mobileWidth="320px"
        mobileHeight="10px"
        borderRadius="10px"
      />
      <AnimationLoader
        width="600px"
        height="15px"
        mobileWidth="320px"
        mobileHeight="10px"
        borderRadius="10px"
      />
      <AnimationLoader
        width="600px"
        height="15px"
        mobileWidth="320px"
        mobileHeight="10px"
        borderRadius="10px"
      />
    </div>
    <div class="slider-button md:!mt-1">
      <AnimationLoader
        width="90px"
        height="20px"
        mobileWidth="70px"
        mobileHeight="15px"
        borderRadius="10px"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import AnimationLoader from "./AnimationLoader.vue";
</script>

<style scoped>
.wrapper {
  width: 100%;
}
</style>
