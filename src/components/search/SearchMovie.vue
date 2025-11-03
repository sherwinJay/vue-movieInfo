<script setup lang="ts">
import { useGetSearchMovies } from "@/services/queries";
import { computed, ref } from "vue";
import { refDebounced } from "@vueuse/core";
import { BiSearch } from "vue-icons-plus/bi";

type InputIdType = {
  inputId: string;
};

const props = defineProps<InputIdType>();

const searchText = ref("");
const isFocus = ref(false);
const debounced = refDebounced(searchText);

const { data, isLoading } = useGetSearchMovies(searchText, debounced);
const filteredData = computed(() => data.value?.filter((data) => data.media_type !== "person"));

const slicedData = computed(() => filteredData.value?.slice(0, 9));

function handleFocus() {
  isFocus.value = true;
}

function handleBlur() {
  setTimeout(() => {
    isFocus.value = false;
    searchText.value = "";
  }, 500);
}
</script>

<template>
  <div class="flex flex-col relative w-full md:w-[300px]">
    <div class="px-3 py-1 items-center gap-1.5 rounded-full bg-white flex">
      <BiSearch class="text-gray-400 w-5 h-5" />
      <input
        v-model="searchText"
        type="text"
        :id="props.inputId"
        class="text-black border-none outline-none focus:outline-none w-full pr-6 text-sm md:text-[15px]"
        placeholder="search movies"
        @blur="handleBlur"
        @focus="handleFocus"
      />
    </div>

    <div v-if="isLoading">
      <div
        className="absolute right-[10px] top-[4px] fill-[#00bd7e] z-20 text-[#00bd7e] inline-block w-[1.2rem] h-[1.2rem] md:h-[1.35rem] md:w-[1.35rem] animate-spin rounded-full border-3 border-solid border-current border-r-[#bfefe0] align-[-0.125em] text-success motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      />
    </div>
    <div v-else-if="searchText.length > 2">
      <div v-if="isFocus">
        <ul
          class="absolute bg-slate-800 z-10 w-full top-[38px] rounded-md overflow-hidden"
          v-if="slicedData!.length > 0"
        >
          <li
            v-for="movie in slicedData"
            :key="movie.id"
            class="border-b border-solid last:border-0 border-slate-500"
          >
            <RouterLink
              :to="`/${movie.media_type}/${movie.id}`"
              class="block !px-[0.7em] !py-[0.6em] !text-white hover:bg-slate-600"
            >
              <span class="!m-0 block leading-1 md:leading-5 text-sm md:text-[15px]">{{
                movie.title || movie.name
              }}</span>
              <span class="text-emerald-200 text-[11px] md:text-xs italic">{{
                movie.media_type
              }}</span>
            </RouterLink>
          </li>
        </ul>
        <ul v-else class="absolute bg-slate-800 z-10 w-full top-[38px] rounded-md overflow-hidden">
          <li
            class="border-b border-solid last:border-0 border-slate-500 !px-[0.7em] py-5 text-white"
          >
            No Result
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
