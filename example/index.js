import Vue from 'vue';
import App from './App';
import router from './router'
import {Button, Icon} from '$pkg/index'

Vue.use(Button)
Vue.use(Icon)

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
