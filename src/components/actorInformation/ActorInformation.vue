<script setup lang="ts">
import type { ActorInformationType } from "@/types/types";
import moment from "moment";
const props = defineProps<ActorInformationType>();

const birthday = props.birthday ? moment(props.birthday).format("MMMM D, YYYY") : "-";
const deathDay = props.deathday ? moment(props.deathday).format("MMMM D, YYYY") : false;
const age = moment().diff(props.birthday, "years");
const deathAge = moment(props.deathday).diff(props.birthday, "years");
</script>

<template>
  <div class="flex flex-col gap-3 text-white text-sm">
    <h2 class="md:mt-5 mb-4 !font-bold text-emerald-500 text-lg">Personal Information</h2>
    <div>
      <h3 class="text-[15px] !font-bold text-emerald-500 leading-6">Birthday</h3>
      <p class="!text-sm" v-if="props.birthday">
        {{ birthday }}<span v-if="!deathDay"> ({{ age }} years old)</span>
      </p>
      <p v-else>-</p>
    </div>
    <div v-if="deathDay">
      <h3 class="text-[15px] !font-bold text-emerald-500 leading-6">Death</h3>
      <p class="!text-sm">
        {{ deathDay }}<span> ({{ deathAge }} years old)</span>
      </p>
    </div>
    <div>
      <h3 class="text-[15px] !font-bold text-emerald-500 leading-6">Place of Birth</h3>
      <p class="!text-sm" v-if="props.birthPlace">{{ props.birthPlace }}</p>
      <p v-else>-</p>
    </div>
    <div v-if="props.alsoKnownAs?.length">
      <h3 class="text-[15px] !font-bold text-emerald-500 leading-6">Also Known As</h3>
      <p v-for="(name, index) in props.alsoKnownAs" :key="index" class="leading-6.5 !text-sm">
        {{ name }}
      </p>
    </div>
  </div>
</template>

<style scoped></style>
