import { createRouter, createWebHistory } from "vue-router";
import NotFound from "@/views/NotFound.vue";
import AllReposVue from "@/views/AllRepos.vue";
import SingleRepoVue from "@/views/SingleRepo.vue";
import HomePage from "@/views/HomePage.vue";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/repositories",
    component: AllReposVue,
  },
  {
    path: "/repositories/:id",
    name: "single-repo",
    component: SingleRepoVue,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
