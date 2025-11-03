<template>
  <div class="cast-column">
    <AnimationLoader
      width="180px"
      height="20px"
      mobileWidth="120px"
      mobileHeight="16px"
      borderRadius="10px"
    />
    <div class="flex gap-2 justify-between !mt-4">
      <div>
        <AnimationLoader
          width="160px"
          height="225px"
          mobile-width="100px"
          mobile-height="170px"
          borderRadius="10px"
        />
        <div class="flex flex-col gap-1 !mt-2">
          <AnimationLoader
            width="100px"
            height="12px"
            mobileWidth="80px"
            mobileHeight="12px"
            borderRadius="10px"
          />
          <AnimationLoader
            width="60px"
            height="12px"
            mobileWidth="45px"
            mobileHeight="10px"
            borderRadius="10px"
          />
        </div>
      </div>
      <div>
        <AnimationLoader
          width="160px"
          height="225px"
          mobile-width="100px"
          mobile-height="170px"
          borderRadius="10px"
        />
        <div class="flex flex-col gap-1 !mt-2">
          <AnimationLoader
            width="100px"
            height="12px"
            mobileWidth="80px"
            mobileHeight="12px"
            borderRadius="10px"
          />
          <AnimationLoader
            width="60px"
            height="12px"
            mobileWidth="45px"
            mobileHeight="10px"
            borderRadius="10px"
          />
        </div>
      </div>

      <div class="">
        <AnimationLoader
          width="160px"
          height="225px"
          mobile-width="100px"
          mobile-height="170px"
          borderRadius="10px"
        />
        <div class="flex flex-col gap-1 !mt-2">
          <AnimationLoader
            width="100px"
            height="12px"
            mobileWidth="80px"
            mobileHeight="12px"
            borderRadius="10px"
          />
          <AnimationLoader
            width="60px"
            height="12px"
            mobileWidth="45px"
            mobileHeight="10px"
            borderRadius="10px"
          />
        </div>
      </div>
      <div class="hidden md:block">
        <AnimationLoader
          width="160px"
          height="225px"
          mobile-width="125px"
          mobile-height="188px"
          borderRadius="10px"
        />
        <div class="flex flex-col gap-1 !mt-2">
          <AnimationLoader
            width="100px"
            height="12px"
            mobileWidth="80px"
            mobileHeight="12px"
            borderRadius="10px"
          />
          <AnimationLoader
            width="60px"
            height="12px"
            mobileWidth="45px"
            mobileHeight="10px"
            borderRadius="10px"
          />
        </div>
      </div>
      <div class="hidden md:block">
        <AnimationLoader
          width="160px"
          height="225px"
          mobile-width="125px"
          mobile-height="188px"
          borderRadius="10px"
        />
        <div class="flex flex-col gap-1 !mt-2">
          <AnimationLoader
            width="100px"
            height="12px"
            mobileWidth="80px"
            mobileHeight="12px"
            borderRadius="10px"
          />
          <AnimationLoader
            width="60px"
            height="12px"
            mobileWidth="45px"
            mobileHeight="10px"
            borderRadius="10px"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AnimationLoader from "./AnimationLoader.vue";
</script>

<style scoped>
.cast-column {
  grid-row-start: 1;
  grid-row-end: 2;
  grid-column-start: 1;
  grid-column-end: 4;
}
</style>
