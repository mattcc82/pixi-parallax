import Vue from 'vue'
import Router from 'vue-router'
import Step1 from './views/Step1.vue'
import Step2 from './views/Step2.vue'
import Step3 from './views/Step3.vue'
import Step4 from './views/Step4.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Step1
    },
    {
      path: '/2',
      name: 'step2',
      component: Step2
    },
    {
      path: '/3',
      name: 'step3',
      component: Step3
    },
    {
      path: '/4',
      name: 'step4',
      component: Step4
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
