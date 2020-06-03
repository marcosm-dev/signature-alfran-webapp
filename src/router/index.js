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
    component: NewClient
  },
  {
    path: '/protection',
    name: 'Protection',
    component: Protection
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
