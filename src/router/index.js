import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Cook from '@/components/cook/Index'
import CreateCook from '@/components/CreateCook'
import EditCook from '@/components/EditCook'
import Cooking from '@/components/viewcook/Index'

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
      path: '/cook/:cookId/edit',
      name: 'cook-edit',
      component: EditCook
    },
    {
      path: '/cook/:cookId',
      name: 'cooking',
      component: Cooking
    }
  ]
})
