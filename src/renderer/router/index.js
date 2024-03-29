import { createRouter, createWebHistory } from "vue-router";
import ViewCountDown from "../views/ViewCountDown2.vue";
import ViewManageSettings from "../views/ViewManageSettings.vue";

const routes = [
  {
    path: "/",
    component: ViewCountDown,
  },
  {
    path: "/settings",
    component: ViewManageSettings,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
