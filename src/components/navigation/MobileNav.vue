<template>
  <!-- <input type="checkbox" id="sidebar-active" /> -->

  <!-- <div class="fixed top-0 left-0 w-full h-[100vh] bg-(--mobile-sidebar-bg) z-20"> -->
  <!-- <Transition name="slide"> -->
  <div :class="{ 'mobile-nav': props.showMobileNav }">
    <Transition name="slide">
      <div v-if="props.showMobileNav" class="fixed top-0 right-0 !h-[100vh] pl-[60px] w-full z-20">
        <div class="bg-slate-800 h-full px-5 py-5">
          <EpCircleClose
            @click="handleToggle"
            class="flex justify-self-end w-7 h-7 text-white !mb-5"
          />
          <SearchMovie inputId="search-mobile" />
        </div>
      </div>
    </Transition>
  </div>

  <!-- </Transition> -->
  <!-- </div> -->
</template>

<script setup lang="ts">
import { SearchMovie } from "..";
import { EpCircleClose } from "vue-icons-plus/ep";

type MobileNavType = {
  showMobileNav: boolean;
};

const props = defineProps<MobileNavType>();

// console.log("mobile nav: ", props.showMobileNav);

const emit = defineEmits(["toggleMenu"]);

function handleToggle() {
  emit("toggleMenu");
}
</script>

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
