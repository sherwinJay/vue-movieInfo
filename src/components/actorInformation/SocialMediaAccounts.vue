<script setup lang="ts">
import { useSocialMediaAccount } from "@/services/queries";
import { Fa6XTwitter, Fa6FacebookF } from "vue-icons-plus/fa6";
import { IoLogoInstagram } from "vue-icons-plus/io";
import { FiYoutube } from "vue-icons-plus/fi";

type PropsType = {
  pageId: number | string;
};

const props = defineProps<PropsType>();

const { data, isLoading } = useSocialMediaAccount(props.pageId);

// console.log("social", data?.value);
</script>

<template>
  <div v-if="isLoading"></div>
  <div v-else class="flex gap-1 justify-center items-center pt-2 pb-5 md:py-4 md:justify-start">
    <a v-if="data?.facebook_id" :href="`https://facebook.com/${data.facebook_id}`" target="_blank">
      <Fa6FacebookF />
    </a>
    <a v-if="data?.twitter_id" :href="`https://twitter.com/${data.twitter_id}`" target="_blank">
      <Fa6XTwitter />
    </a>
    <a
      v-if="data?.instagram_id"
      :href="`https://instgram.com/${data.instagram_id}`"
      target="_blank"
    >
      <IoLogoInstagram />
    </a>
    <a
      v-if="data?.youtube_id"
      :href="`https://youtube.com/${data.youtube_id}`"
      target="_blank"
      class="!ml-[2px]"
    >
      <FiYoutube />
    </a>
  </div>
</template>

<style scoped></style>
