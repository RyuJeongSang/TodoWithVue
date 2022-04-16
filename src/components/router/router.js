import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Don't do it!",
    component: () => import("@/components/pages/TodoApp"),
    meta: {
      title: "Don't do it!",
    },
  },
  {
    path: "/test",
    name: "Test",
    component: () => import("@/components/pages/pageTest"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
