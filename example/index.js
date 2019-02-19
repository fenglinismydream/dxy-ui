import Vue from 'vue';
import App from './App';
import router from './router'
import {Button} from '$pkg/index'
Vue.use(Button)
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
