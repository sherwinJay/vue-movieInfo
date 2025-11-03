<template>
  <div class="placeholder">&nbsp;</div>
</template>

<script setup lang="ts">
type PropsType = {
  height: string;
  width: string;
  borderRadius: string;
  mobileWidth: string;
  mobileHeight: string;
};

defineProps<PropsType>();
</script>

<style scoped>
@keyframes bgAnimate {
  0% {
    background-position: 50% 0;
  }

  100% {
    background-position: -150% 0;
  }
}

@keyframes bgAnimate2 {
  0% {
    background-color: hsl(215, 29%, 54%);
  }

  100% {
    background-color: hsl(215, 29%, 32%);
  }
}
.placeholder {
  height: v-bind(mobileHeight);
  width: v-bind(mobileWidth);
  border-radius: v-bind(borderRadius);
  background-size: 200% 100%;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  animation: bgAnimate2 1.2s linear infinite alternate;
  opacity: 0.7;
}
@media (width >= 48rem /* 768px */) {
  .placeholder {
    height: v-bind(height);
    width: v-bind(width);
    border-radius: v-bind(borderRadius);
  }
}
</style>
