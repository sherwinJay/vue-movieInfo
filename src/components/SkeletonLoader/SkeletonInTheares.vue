<template>
  <div>
    <div class="!mb-2.5 md:!mb-4">
      <AnimationLoader
        width="180px"
        height="16px"
        mobileWidth="120px"
        mobileHeight="12px"
        borderRadius="10px"
      />
    </div>
    <div
      class="grid grid-custom-row-3 leading-2 grid-cols-4 min-h-[250px] md:grid-cols-5 md:grid-rows-2 md:min-h-[360px] gap-[0.6rem] md:gap-3"
    >
      <div class="flex flex-col gap-2 md:gap-2.5 featured_card">
        <AnimationLoader
          width="100%"
          height="100%"
          mobileWidth="100%"
          mobileHeight="100%"
          borderRadius="10px"
        />
      </div>
      <div class="flex flex-col gap-2 md:gap-2.5 featured_card">
        <AnimationLoader
          width="100%"
          height="100%"
          mobileWidth="100%"
          mobileHeight="100%"
          borderRadius="10px"
        />
      </div>
      <div class="flex flex-col gap-2 md:gap-2.5 featured_card">
        <AnimationLoader
          width="100%"
          height="100%"
          mobileWidth="100%"
          mobileHeight="100%"
          borderRadius="10px"
        />
      </div>

      <div class="flex flex-col gap-2 md:gap-2.5 featured_card">
        <AnimationLoader
          width="100%"
          height="100%"
          mobileWidth="100%"
          mobileHeight="100%"
          borderRadius="10px"
        />
      </div>

      <div class="flex flex-col gap-2 md:gap-2.5 featured_card">
        <AnimationLoader
          width="100%"
          height="100%"
          mobileWidth="100%"
          mobileHeight="100%"
          borderRadius="10px"
        />
      </div>

      <div class="flex flex-col gap-2 md:gap-2.5 featured_card">
        <AnimationLoader
          width="100%"
          height="100%"
          mobileWidth="100%"
          mobileHeight="100%"
          borderRadius="10px"
        />
      </div>

      <div class="flex flex-col gap-2 md:gap-2.5 featured_card">
        <AnimationLoader
          width="100%"
          height="100%"
          mobileWidth="100%"
          mobileHeight="100%"
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
.grid-custom-row-3 {
  grid-template-rows: repeat(3, 117px);
  grid-auto-rows: 0 !important; /* Set height of auto-generated rows to 0 */
  overflow-y: hidden !important;

  @media screen and (min-width: 769px) {
    grid-template-rows: repeat(2, 172px);
  }
}
.featured_card:first-child {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;

  @media screen and (min-width: 769px) {
    grid-column-end: 3;
  }
}
.featured_card:nth-child(n + 8) {
  display: none;
}

.featured_card {
  padding: 0;
}
</style>
