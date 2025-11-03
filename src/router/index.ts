import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MovieView from "../views/MovieView.vue";
import TVView from "../views/TVView.vue";
import PersonView from "@/views/PersonView.vue";
// import { Movie } from "@/components";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        title: "Home Page",
      },
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/movie/:id",
      name: "movie",
      meta: {
        title: "Movies - :id",
      },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: MovieView,
    },
    {
      path: "/tv/:id",
      name: "tv",
      meta: {
        title: "TV - :id",
      },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: TVView,
    },
    {
      path: "/person/:id",
      name: "person",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: PersonView,
    },
  ],
});

// router.beforeEach((to, from, next) => {
//   document.title = to.meta.title || "My Vue App";
//   next();
//   // const description = document.querySelector('meta[name="description"]');
//   // if (description) description.setAttribute("content", to.meta.description || "");
// });

export default router;
