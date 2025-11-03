<template>
  <div>
    <div class="flex flex-col gap-4">
      <div
        class="flex flex-col items-center justify-center md:justify-start md:items-start gap-2.5"
      >
        <AnimationLoader
          width="277px"
          height="415px"
          mobileWidth="168px"
          mobileHeight="252px"
          borderRadius="10px"
        />
        <div class="block md:hidden">
          <AnimationLoader
            width="120px"
            height="16px"
            mobileWidth="120px"
            mobileHeight="14px"
            borderRadius="10px"
          />
        </div>
      </div>

      <!-- Social Media Icons -->
      <div class="flex justify-center md:justify-start gap-2 !mb-5 md:!mb-1">
        <AnimationLoader
          width="25px"
          height="25px"
          mobileWidth="25px"
          mobileHeight="25px"
          borderRadius="25px"
        />
        <AnimationLoader
          width="25px"
          height="25px"
          mobileWidth="25px"
          mobileHeight="25px"
          borderRadius="25px"
        />
        <AnimationLoader
          width="25px"
          height="25px"
          mobileWidth="25px"
          mobileHeight="25px"
          borderRadius="25px"
        />
        <AnimationLoader
          width="25px"
          height="25px"
          mobileWidth="25px"
          mobileHeight="25px"
          borderRadius="25px"
        />
      </div>
      <AnimationLoader
        width="120px"
        height="16px"
        mobileWidth="120px"
        mobileHeight="14px"
        borderRadius="10px"
      />
      <!-- Birthday -->
      <div class="flex flex-col gap-2">
        <AnimationLoader
          width="80px"
          height="14px"
          mobileWidth="80px"
          mobileHeight="12px"
          borderRadius="10px"
        />
        <AnimationLoader
          width="140px"
          height="14px"
          mobileWidth="120px"
          mobileHeight="12px"
          borderRadius="10px"
        />
      </div>
      <!-- Birthplace -->
      <div class="flex flex-col gap-2">
        <AnimationLoader
          width="80px"
          height="14px"
          mobileWidth="80px"
          mobileHeight="12px"
          borderRadius="10px"
        />
        <AnimationLoader
          width="140px"
          height="14px"
          mobileWidth="120px"
          mobileHeight="12px"
          borderRadius="10px"
        />
      </div>
      <!-- Alias -->
      <div class="flex flex-col gap-2">
        <AnimationLoader
          width="100px"
          height="14px"
          mobileWidth="90px"
          mobileHeight="12px"
          borderRadius="10px"
        />
        <AnimationLoader
          width="70px"
          height="14px"
          mobileWidth="70px"
          mobileHeight="12px"
          borderRadius="10px"
        />
        <AnimationLoader
          width="70px"
          height="14px"
          mobileWidth="70px"
          mobileHeight="12px"
          borderRadius="10px"
        />
        <AnimationLoader
          width="70px"
          height="14px"
          mobileWidth="70px"
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

<style scoped></style>
