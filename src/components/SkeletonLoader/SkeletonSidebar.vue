<template>
  <div class="sidebar-column">
    <div class="flex flex-col gap-5">
      <div class="flex flex-col gap-2">
        <AnimationLoader
          width="160px"
          height="18px"
          mobileWidth="120px"
          mobileHeight="14px"
          borderRadius="10px"
        />
        <AnimationLoader
          width="120px"
          height="14px"
          mobileWidth="80px"
          mobileHeight="12px"
          borderRadius="10px"
        />
      </div>
      <div class="flex flex-col gap-2">
        <AnimationLoader
          width="160px"
          height="18px"
          mobileWidth="120px"
          mobileHeight="14px"
          borderRadius="10px"
        />
        <AnimationLoader
          width="120px"
          height="14px"
          mobileWidth="80px"
          mobileHeight="12px"
          borderRadius="10px"
        />
      </div>
      <div class="flex flex-col gap-2">
        <AnimationLoader
          width="160px"
          height="18px"
          mobileWidth="120px"
          mobileHeight="14px"
          borderRadius="10px"
        />
        <AnimationLoader
          width="100px"
          height="14px"
          mobileWidth="70px"
          mobileHeight="12px"
          borderRadius="10px"
        />
      </div>
      <div class="flex flex-col gap-2">
        <AnimationLoader
          width="180px"
          height="18px"
          mobileWidth="120px"
          mobileHeight="14px"
          borderRadius="10px"
        />
        <AnimationLoader
          width="220px"
          height="14px"
          mobileWidth="180px"
          mobileHeight="12px"
          borderRadius="10px"
        />
        <AnimationLoader
          width="220px"
          height="16px"
          mobileWidth="180px"
          mobileHeight="12px"
          borderRadius="10px"
        />
        <AnimationLoader
          width="220px"
          height="16px"
          mobileWidth="180px"
          mobileHeight="12px"
          borderRadius="10px"
        />
      </div>

      <div class="flex flex-col gap-2">
        <AnimationLoader
          width="180px"
          height="18px"
          mobileWidth="120px"
          mobileHeight="14px"
          borderRadius="10px"
        />
        <div class="flex flex-col gap-2">
          <AnimationLoader
            width="140px"
            height="16px"
            mobileWidth="80px"
            mobileHeight="12px"
            borderRadius="10px"
          />
          <AnimationLoader
            width="100px"
            height="16px"
            mobileWidth="60px"
            mobileHeight="12px"
            borderRadius="10px"
          />
        </div>
        <div class="flex flex-col gap-2">
          <AnimationLoader
            width="140px"
            height="16px"
            mobileWidth="80px"
            mobileHeight="12px"
            borderRadius="10px"
          />
          <AnimationLoader
            width="100px"
            height="16px"
            mobileWidth="60px"
            mobileHeight="12px"
            borderRadius="10px"
          />
        </div>
        <div class="flex flex-col gap-2">
          <AnimationLoader
            width="140px"
            height="16px"
            mobileWidth="80px"
            mobileHeight="12px"
            borderRadius="10px"
          />
          <AnimationLoader
            width="100px"
            height="16px"
            mobileWidth="60px"
            mobileHeight="12px"
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
.sidebar-column {
  grid-row-start: 1;
  grid-row-end: 3;
  grid-column-start: 4;
  grid-column-end: 5;
}
</style>
