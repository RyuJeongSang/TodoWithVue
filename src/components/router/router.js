import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Not To Do",
    component: () => import("@/components/pages/TodoApp"),
    meta: {
      title: "Not To Do",
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
  document.title = to.name;
  next();
});

export default router;
