<template>
  <div class="flex justify-center bg-slate-800">
    <div class="lg:w-[1200px] py-5 md:py-10 flex md:gap-5 px-4 md:px-0">
      <!-- BANNER IMAGE -->
      <div class="hidden md:block">
        <AnimationLoader
          width="350px"
          height="525px"
          mobileWidth="0px"
          mobileHeight="0px"
          borderRadius="10px"
        />
      </div>
      <!-- 2nd Column -->
      <div class="flex flex-col gap-2">
        <div class="banner-title">
          <AnimationLoader
            width="180px"
            height="20px"
            mobileWidth="120px"
            mobileHeight="15px"
            borderRadius="10px"
          />
        </div>
        <div class="banner-category_release-date flex gap-2 items-center">
          <AnimationLoader
            width="120px"
            height="15px"
            mobileWidth="70px"
            mobileHeight="10px"
            borderRadius="10px"
          />
          <AnimationLoader
            width="120px"
            height="15px"
            mobileWidth="70px"
            mobileHeight="10px"
            borderRadius="10px"
          />
        </div>
        <!-- Banner Icons -->
        <div class="banner-icons flex gap-7 py-3">
          <div class="flex gap-2 items-center">
            <AnimationLoader
              width="56px"
              height="56px"
              mobileWidth="50px"
              mobileHeight="50px"
              borderRadius="30px"
            />
            <AnimationLoader
              width="70px"
              height="12px"
              mobileWidth="50px"
              mobileHeight="12px"
              borderRadius="10px"
            />
          </div>
          <div class="flex gap-2 items-center">
            <AnimationLoader
              width="40px"
              height="40px"
              mobileWidth="35px"
              mobileHeight="35px"
              borderRadius="25px"
            />
            <AnimationLoader
              width="70px"
              height="12px"
              mobileWidth="50px"
              mobileHeight="12px"
              borderRadius="10px"
            />
          </div>
          <div class="flex gap-2 items-center">
            <AnimationLoader
              width="40px"
              height="40px"
              mobileWidth="35px"
              mobileHeight="35px"
              borderRadius="25px"
            />
            <AnimationLoader
              width="70px"
              height="12px"
              mobileWidth="50px"
              mobileHeight="12px"
              borderRadius="10px"
            />
          </div>
        </div>
        <!-- Banner Overview -->
        <AnimationLoader
          width="600px"
          height="15px"
          mobileWidth="100%"
          mobileHeight="10px"
          borderRadius="10px"
        />
        <AnimationLoader
          width="600px"
          height="15px"
          mobileWidth="100%"
          mobileHeight="10px"
          borderRadius="10px"
        />
        <AnimationLoader
          width="600px"
          height="15px"
          mobileWidth="100%"
          mobileHeight="10px"
          borderRadius="10px"
        />
        <AnimationLoader
          width="600px"
          height="15px"
          mobileWidth="100%"
          mobileHeight="10px"
          borderRadius="10px"
        />
        <!-- Banner Crews -->
        <div class="banner-crews flex justify-between !mt-3 md:!mt-4">
          <div class="flex flex-col gap-1.5">
            <AnimationLoader
              width="100px"
              height="15px"
              mobileWidth="80px"
              mobileHeight="12px"
              borderRadius="10px"
            />
            <AnimationLoader
              width="60px"
              height="14px"
              mobileWidth="45px"
              mobileHeight="11px"
              borderRadius="10px"
            />
          </div>
          <div class="flex flex-col gap-1.5">
            <AnimationLoader
              width="100px"
              height="15px"
              mobileWidth="80px"
              mobileHeight="12px"
              borderRadius="10px"
            />
            <AnimationLoader
              width="60px"
              height="14px"
              mobileWidth="60px"
              mobileHeight="11px"
              borderRadius="10px"
            />
          </div>
          <div class="flex flex-col gap-1.5">
            <AnimationLoader
              width="100px"
              height="15px"
              mobileWidth="80px"
              mobileHeight="12px"
              borderRadius="10px"
            />
            <AnimationLoader
              width="60px"
              height="14px"
              mobileWidth="45px"
              mobileHeight="11px"
              borderRadius="10px"
            />
          </div>
          <div class="hidden md:flex flex-col gap-1.5">
            <AnimationLoader
              width="100px"
              height="15px"
              mobileWidth="100px"
              mobileHeight="12px"
              borderRadius="10px"
            />
            <AnimationLoader
              width="60px"
              height="14px"
              mobileWidth="45px"
              mobileHeight="11px"
              borderRadius="10px"
            />
          </div>
          <!-- Banner Crews end here -->
        </div>
      </div>
      <!-- 2nd Column end here -->
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
