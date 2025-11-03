<script setup lang="ts">
import {
  ActorInformation,
  SocialMediaAccounts,
  ActorFilmThumbnails,
  ActorFilmography,
  ImageComponent,
} from "@/components";
import { useSliceTextByDot } from "@/composables/useSliceTextByDot";
import { movieDbImgURL } from "@/constants/constants";
import { useGetActorCredits, useGetActorData } from "@/services/queries";
import { computed } from "vue";
import { useRoute } from "vue-router";
import { MdOutlineImageNotSupported } from "vue-icons-plus/md";
import SkeletonPersonalInformation from "@/components/SkeletonLoader/SkeletonPersonalInformation.vue";
import SkeletonBiography from "@/components/SkeletonLoader/SkeletonBiography.vue";
import SkeletonActorFilms from "@/components/SkeletonLoader/SkeletonActorFilms.vue";
import SkeletonFilmography from "@/components/SkeletonLoader/SkeletonFilmography.vue";
import { useHead } from "@vueuse/head";
const route = useRoute();
const pageId = route.params.id as string;

const { data, isLoading } = useGetActorData(pageId);
const testText = computed(() => data.value?.biography || "");
const biography = computed(() => useSliceTextByDot(testText.value));

const actorCredits = useGetActorCredits(pageId);
useHead({
  title: computed(() => (data.value ? `${data.value.name}  - MovieInformation` : "")),
  meta: [
    {
      name: "description",
      content: computed(() => data.value?.biography),
    },
  ],
});
</script>

<template>
  <div v-if="isLoading">
    <div
      class="!text-white w-full !m-auto p-[1.5em] grid grid-cols-1 grid-customRow3 gap-[1.5em] lg:grid-cols-4 lg:py-[3em] lg:px-2 xl:w-[1200px]"
    >
      <SkeletonPersonalInformation />
      <div class="flex flex-col gap-7">
        <SkeletonBiography />
        <SkeletonActorFilms />
        <SkeletonFilmography />
      </div>
    </div>
  </div>
  <section v-else>
    <div
      class="!text-white w-full !m-auto p-[1.5em] grid grid-cols-1 grid-customRow3 gap-[1.5em] lg:grid-cols-4 lg:py-[3em] lg:px-2 xl:w-[1200px]"
    >
      <div class="lg:col-start-1 lg:col-end-2">
        <div class="relative flex items-center justify-center">
          <div
            class="bg-slate-600 border-slate-800 rounded-sm border-[1px] grid place-content-center overflow-hidden w-[170px] min-h-[250px] md:w-[342px] md:min-h-[350px]"
          >
            <MdOutlineImageNotSupported
              v-if="data?.profile_path === null"
              class="w-[45px] h-[45px] opacity-70 flex"
            />
            <!-- <img
              v-else
              :src="`${movieDbImgURL}/t/p/w342${data?.profile_path}`"
              loading="lazy"
              :alt="data?.name"
              class="w-[170px] md:w-[342px]"
            /> -->
            <ImageComponent
              v-else
              :src="`${movieDbImgURL}/t/p/w342${data?.profile_path}`"
              :alt="data?.name"
              :classProp="`w-[170px] md:w-[342px] lqip-image`"
            />
          </div>
        </div>

        <h2 class="text-center !mt-5 md:hidden !font-bold !mb-0 text-2xl">{{ data?.name }}</h2>
        <SocialMediaAccounts :pageId="pageId" />
        <ActorInformation
          :birthday="data?.birthday"
          :birthPlace="data?.place_of_birth"
          :gender="data?.gender"
          :id="data?.id"
          :deathday="data?.deathday"
          :alsoKnownAs="data?.also_known_as"
        />
      </div>

      <div class="lg:col-start-2 lg:col-end-5">
        <h1 className="hidden md:block !font-bold text-3xl mb-7">
          {{ data?.name }}
        </h1>
        <div>
          <h3 class="!mt-5 !mb-2 text-lg !font-semibold">Biography</h3>
          <div className="!text-sm leading-6" v-if="data!.biography.length > 0">
            <p>{{ biography.before }}</p>
            <p className="!mt-2.5">{{ biography.after }}</p>
            <!-- <p>{{ useSliceTextByDot(data.biography).before }}</p>
            <p className="mt-5">{{ useSliceTextByDot(data.biography).after }}</p> -->
          </div>
          <p v-else className="text-sm">{{ `We don't have a biography for ${data?.name}.` }}</p>
        </div>
        <div v-if="actorCredits.data">
          <h3 class="!mt-5 !mb-1 text-lg !font-semibold">Known For</h3>
          <ActorFilmThumbnails :actorData="actorCredits.data" />
        </div>

        <div v-if="actorCredits.data" class="!mt-9">
          <h3 class="!mt-5 !mb-1 text-lg !font-semibold">Filmography</h3>
          <ActorFilmography :actorData="actorCredits.data" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
