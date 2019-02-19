import Vue from 'vue'
import Router from 'vue-router'
import DemoRouters from './demoRouters'

Vue.use(Router)

const routes = [
  ...DemoRouters
]

const router = new Router({
  mode: 'history',
  routes: [
    { path: '/button', name: 'button', component: () => import('@/pages/button/index') }
  ]
})

export default router