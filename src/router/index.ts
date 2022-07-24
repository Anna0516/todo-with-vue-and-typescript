import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import MyHome from "../views/Home/MyHome.vue";
import AddTask from "../views/AddTask/AddTask.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: MyHome,
  },
  {
    path: "/add_task",
    name: "AddTask",
    component: AddTask,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
