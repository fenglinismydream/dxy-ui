import Vue from 'vue'
import Router from 'vue-router'
import DemoRouters from './demoRouters'

Vue.use(Router)

const routes = [
  ...DemoRouters
]

const router = new Router({
  mode: 'history',
  routes
})

export default router