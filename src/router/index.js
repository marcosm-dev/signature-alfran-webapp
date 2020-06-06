import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NewClient from '../views/New-Client.vue'
import Client from '../views/Client.vue'
import Proteccion from '../views/Proteccion'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/newclient',
    name: 'NewClient',
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
    path: '/client/:id',
    name: 'Client',
    component: Client,
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
    path: '/newproteccion',
    name: 'Proteccion',
    component: Proteccion,
    beforeEnter(to, from, next) {
      if (!localStorage.token) {
        next({
          name: 'Home'
        })
      }
      next()
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
