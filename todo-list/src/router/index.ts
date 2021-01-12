import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import TodoList from "../views/Todo.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "TodoList",
    component: TodoList
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
