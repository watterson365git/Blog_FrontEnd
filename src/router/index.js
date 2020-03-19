import Vue from 'vue'
import VueRouter from 'vue-router'


// const Home = () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
// const about = () => import(/* webpackChunkName: "about" */ '../views/About.vue')
const login = () => import(/* webpackChunkName: "about" */ '../views/login.vue')
const register = () => import(/* webpackChunkName: "about" */ '../views/register.vue')

Vue.use(VueRouter)

const routes = [

  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: about
  // },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/register',
    name: 'register',
    component: register
  }
]

const router = new VueRouter({
  // mode:'history',
  mode:'hash',
  routes
})

export default router
