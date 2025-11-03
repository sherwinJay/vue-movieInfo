<script setup lang="ts">
import type { CreatorType, CrewType } from "@/types/types";

const props = defineProps<CrewType | CreatorType>();
</script>
<template>
  <div class="flex flex-col">
    <span class="!font-bold leading-4 md:leading-5 text-xs md:text-base">{{ props.name }}</span>
    <span class="text-xs !mt-1 md:!mt-0 md:text-sm">{{ props.job }}</span>
  </div>
</template>

<style scoped></style>
