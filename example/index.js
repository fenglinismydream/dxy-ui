import Vue from 'vue';
import App from './App';
import router from './router'
import {Button, Icon, Cell, CellGroup} from '$pkg/index'

Vue.use(Button)
Vue.use(Icon)
Vue.use(Cell)
Vue.use(CellGroup)

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
