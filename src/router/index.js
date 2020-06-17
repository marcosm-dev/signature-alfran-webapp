import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      layout: "no-navbar",
    },
    beforeEnter(to, from, next) {
      if (localStorage.token) {
        localStorage.clear();
      }
      next();
    },
  },
  {
    path: "/newclient",
    name: "NewClient",
    component: () =>
      import(/* webpackChunkName: "NewClient" */ "../views/New-Client"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/client/:id",
    name: "Client",
    component: () => import(/* webpackChunkName: "Client" */ "../views/Client"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/clients",
    name: "Clients",
    component: () =>
      import(/* webpackChunkName: "Clients" */ "../views/Clients"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/newproteccion",
    name: "Proteccion",
    component: () =>
      import(/* webpackChunkName: "Proteccion" */ "../views/Proteccion"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/404",
    alias: "*",
    name: "NotFound",
    component: () =>
      import(
        /* webpackChunkName: "NotFound" */
        "../views/NotFound"
      ),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!localStorage.token) {
      next({
        name: "Home",
        query: { redirect: to.fullPath },
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
