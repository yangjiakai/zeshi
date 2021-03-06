import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home/Home.vue'
import Contact from './views/Contact.vue'
import Condadite from './views/Condadite.vue'
import WhyUs from './views/WhyUs.vue'
import Career from './views/Career/Career.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component:Contact
    },
    {
      path: '/condadite',
      name: 'condadite',
      component:Condadite
    },
    {
      path: '/whyus',
      name: 'whyus',
      component:WhyUs
    },
    {
      path:'/career',
      name:'career',
      component:Career
    }
  ]
})
