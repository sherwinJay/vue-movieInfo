import "./assets/main.css";
import "./assets/custom-swiper-bullet.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import VueAxios from "vue-axios";
import { VueQueryPlugin, QueryClient } from "@tanstack/vue-query";
import axios from "axios";
import { createHead } from "@vueuse/head";
// import { UnpicImage } from "@unpic/vue";
// import { OhVueIcon } from "oh-vue-icons";
// import VueMoment from "vue-moment";
// import moment from "moment-timezone";
// import { createMetaManager, plugin as metaPlugin } from "vue-meta";
// import plugin from "vue-meta";
// import createMetaManager from "vue-meta";
// import { createMetaManager, plugin as metaPlugin } from "vue-meta";

const app = createApp(App);
const queryClient = new QueryClient();
const head = createHead();
// const metaManager = createMetaManager();

app.use(createPinia());

app.use(router);
app.use(VueQueryPlugin, { queryClient });
app.use(VueAxios, axios);
app.use(head);
// app.use(metaPlugin, metaManager);
// app.use(metaManager);

// Vue.use(VueMoment, {
//   moment,
// });

// app.use(UnpicImage);
// app.component("v-icon", OhVueIcon);
// await router.isReady();
app.mount("#app");
