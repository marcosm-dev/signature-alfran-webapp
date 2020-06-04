import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NewClient from '../views/newClient.vue'
import Protection from '../views/DataProtection.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/newclient',
    name: 'New',
    component: NewClient,
    beforeEnter(to, from, next) {
      if (!localStorage.token) {
        next({
          name: 'Home'
        })
      }
      next()
    }
  },
  {
    path: '/protection/:id',
    name: 'Protection',
    component: Protection,
    beforeEnter(to, from, next) {
      if (!localStorage.token) {
        next({
          name: 'Home'
        })
      }
      next()
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
