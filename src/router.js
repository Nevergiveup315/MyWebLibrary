import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/person',
      name: 'person',
      // route level code-splitting
      // this generates a separate chunk (person.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "person" */ './views/person.vue')
    },
    {
      path: '/vip',
      name: 'vip',
      component: () => import(/* webpackChunkName: "about" */ './views/Vip.vue')
    },
    {
      path: '/shopcar',
      name: 'shopcar',
      component: () => import(/* webpackChunkName: "about" */ './views/Shopcar.vue')
    }
  ]
})
