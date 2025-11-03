<script setup lang="ts">
import { useRoute, type RouterLink } from "vue-router";
import { SearchMovie } from "..";
import MobileNav from "../navigation/MobileNav.vue";
import { IpHamburgerButton } from "vue-icons-plus/ip";
import { ref, watch } from "vue";

const router = useRoute();
const mobileNav = ref(false);

function toggleMobileNav() {
  mobileNav.value = !mobileNav.value ? true : false;
}

watch(router, () => {
  if (mobileNav.value) {
    mobileNav.value = false;
  }
});
</script>
<template>
  <header class="flex justify-center py-3 md:py-6 bg-stone-950 md:px-4 lg:px-0">
    <div class="w-[1200px] flex justify-between items-center gap-5 px-3 md:px-0">
      <h1 class="text-2xl md:text-4xl">
        <RouterLink to="/" class="!font-bold"> MovieInfo </RouterLink>
      </h1>

      <div class="block md:hidden relative">
        <IpHamburgerButton @click="toggleMobileNav" class="text-white" />
        <MobileNav :showMobileNav="mobileNav" @toggleMenu="toggleMobileNav" />
      </div>

      <div class="hidden md:block">
        <SearchMovie inputId="search-desktop" />
      </div>
    </div>
  </header>
</template>

<style scoped>
.slide-leave-to,
.slide-enter-from {
  transform: translateX(100%);
}
.slide-leave-from,
.slide-enter-to {
  transform: translateX(0);
}
.slide-leave-active,
.slide-enter-active {
  transition: transform 0.5s ease-in-out;
}

.mobile-nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--mobile-sidebar-bg);
  z-index: 100;
  padding-left: 50px;
}
</style>
