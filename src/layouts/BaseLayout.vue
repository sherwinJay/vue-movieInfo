<template>
  <header>
    <!-- header content here -->
    <slot name="header"></slot>
  </header>
  <main>
    <!-- main content here -->
    <slot name="default"></slot>
  </main>
  <footer>
    <!-- footer content here -->
    <slot name="footer"></slot>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped></style>
