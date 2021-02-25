import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@vue/pages/Home.vue'
import Login from '@vue/pages/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router