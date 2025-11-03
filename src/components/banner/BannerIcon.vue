<script setup lang="ts">
type IconType = {
  title?: string;
  class?: string;
};
const props = defineProps<IconType>();
</script>

<template>
  <div class="flex items-center" :class="props.class">
    <slot></slot>
    <span class="!font-semibold" :class="props.class">{{ props.title }}</span>
  </div>
</template>

<style scoped></style>
