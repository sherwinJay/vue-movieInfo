<script setup lang="ts">
import type { MovieSidebarType } from "@/types/types";
// import { computed } from "vue";

const props = defineProps<MovieSidebarType>();
const companies = props.productionCompanies?.slice(0, 4);
const crews = props.crews?.slice(0, 4);
</script>

<template>
  <div>
    <h4 class="text-base !font-bold text-emerald-400">Status</h4>
    <p>{{ props.status }}</p>
  </div>
  <div>
    <h4 class="text-base !font-bold text-emerald-400">Production Companies</h4>
    <ul v-if="companies!.length > 0" class="!mt-1">
      <li v-for="company in companies" :key="company.id">{{ company.name }}</li>
    </ul>
    <p v-else>-</p>
  </div>
  <div>
    <h4 class="text-base !font-bold text-emerald-400">Crews</h4>
    <ul v-if="crews!.length > 0" class="!mt-1 flex flex-col gap-2">
      <li v-for="crew in crews" :key="crew.id">
        <p>{{ crew.name }}</p>
        <p class="text-xs !italic">{{ crew.job }}</p>
      </li>
    </ul>
    <p v-else>-</p>
  </div>
</template>

<style scoped></style>
