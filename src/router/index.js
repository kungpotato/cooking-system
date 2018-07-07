import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Cook from '@/components/Cook'
import CreateCook from '@/components/CreateCook'
import Cooking from '@/components/Cooking'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root'
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/cook',
      name: 'cook',
      component: Cook
    },
    {
      path: '/cook/create',
      name: 'cook-create',
      component: CreateCook
    },
    {
      path: '/cook/:cookId',
      name: 'cooking',
      component: Cooking
    }
  ]
})
