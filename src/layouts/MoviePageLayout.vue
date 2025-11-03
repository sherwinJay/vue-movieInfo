<script setup lang="ts">
type TestType = {
  isLoading: boolean;
};
const props = defineProps<TestType>();
</script>

<template>
  <section>
    <div v-if="props.isLoading">
      <slot name="loader"></slot>
    </div>
    <div v-else>
      <slot name="banner"></slot>
      <div class="flex justify-center">
        <div
          class="md:w-[1200px] py-6 md:py-10 px-5 grid grid-cols-1 gap-5 grid-customRow3 two-column"
        >
          <div class="cast-column">
            <h2 class="text-white text-[18px] md:text-[25px] !mb-3 !font-bold">Lead Casts</h2>
            <slot name="leadCast">
              <div class="bg-slate-800 h-full max-h-[330px] grid place-content-center">
                <p class="text-white !font-bold text-xl">No Casts</p>
              </div>
            </slot>
          </div>
          <div class="sidebar-column text-sm leading-6 text-white flex flex-col gap-3">
            <slot name="sidebar"></slot>
          </div>
          <div class="recommendation-column">
            <h2 class="text-white text-[18px] md:text-[25px] !mb-3 !font-bold">Recommendations</h2>
            <slot name="recommendations">
              <div class="bg-slate-800 h-[250px] grid place-content-center">
                <p class="text-white !font-bold text-xl">No Recommendations</p>
              </div>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@media (width >= 48rem /* 768px */) {
  .two-column {
    display: grid;
    grid-template-rows: repeat(2, minmax(0, 1fr));
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 25px;
  }
  .cast-column {
    grid-row-start: 1;
    grid-row-end: 2;
    grid-column-start: 1;
    grid-column-end: 4;
  }
  .sidebar-column {
    grid-row-start: 1;
    grid-row-end: 3;
    grid-column-start: 4;
    grid-column-end: 5;
  }
  .recommendation-column {
    grid-row-start: 2;
    grid-row-end: 3;
    grid-column-start: 1;
    grid-column-end: 4;
  }
}
</style>
