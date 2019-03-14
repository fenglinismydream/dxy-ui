import Vue from 'vue';
import App from './App';
import router from './router'
import {Button, Icon, Cell, CellGroup, CheckBox, CheckBoxGroup, CollapseItem, Collapse, Loading, Toast, DateTime} from '$pkg/index'

Vue.use(Button)
Vue.use(Icon)
Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(CheckBox)
Vue.use(CheckBoxGroup)
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(Loading)
Vue.use(Toast)
Vue.use(DateTime)

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
