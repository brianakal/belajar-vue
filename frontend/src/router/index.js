import Vue from 'vue'
import VueRouter from 'vue-router'
// Untuk code spliting tidak digunakan import di awal, import dilakukan di dalam routes
// import Home from '../views/Home' 
// import About from '../views/About'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   // component: Home
  //   component: () => import(/* webpackChunkName: "Home" */  '../views/Home.vue')
  // },
  {
    path: '/',
    name: 'login',
    // component: Home
    component: () => import(/* webpackChunkName: "Home" */  '../views/Login.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/About.vue')
  },
  {
    path: '*',
    component: () => import(/* webpackChunkName: "About" */ '../views/404')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/admin/Layout'),
    children:[
      {
        path: '/',
        component: () => import(/* webpackChunkName: "AdminHome" */ '../views/admin/Home'),
      },
      {
        path: 'post',
        component: () => import(/* webpackChunkName: "AdminHome" */ '../views/admin/Post'),
      },
      {
        path: 'users',
        component: () => import(/* webpackChunkName: "AdminHome" */ '../views/admin/Users'),
      },
      {
        path: 'products',
        component: () => import(/* webpackChunkName: "AdminHome" */ '../views/admin/Products'),
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
