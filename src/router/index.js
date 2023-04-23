import { createRouter, createWebHistory } from "vue-router";
import index from "../page/home.vue";
import componentA from "../components/componentA.vue";
import componentFor from "../components/componentFor.vue";
import componentcomputed from "../components/computed.vue";
import componentwatch from "../components/watch.vue";
import child from "../components/child.vue";
import componentlife from "../components/componentLife.vue";
const history = createWebHistory();
const router = createRouter({
  history,
  routes: [
    {
      path: "/user",
      component: componentA,
    },
    {
      path: "/for",
      component: componentFor,
    },
    {
      path: "/computed",
      component: componentcomputed,
    },
    {
      path: "/watch",
      component: componentwatch,
    },
    {
      path: "/child",
      component: child,
    },
    {
      path: "/componentlife",
      component: componentlife,
    },
  ],
});

export default router;
