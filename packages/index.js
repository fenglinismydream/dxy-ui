import Button from './button'
import Icon from './icon'
import Cell from './cell'
import CellGroup from './cell-group'
import CheckBox from './checkbox'
import CheckBoxGroup from './checkbox-group'
import Collapse from './collapse'
import CollapseItem from './collapse-item'
import Loading from './loading'
import Toast from './toast/index'


const components = [
  Button,
  Icon,
  Cell,
  CellGroup,
  CheckBox,
  CheckBoxGroup,
  Collapse,
  CollapseItem,
  Loading,
  Toast
]

const install = Vue => {
  components.forEach(Component => {
    Vue.use(Component)
  })
}
// 支持使用标签的方式引入
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  install,
  Button,
  Icon,
  Cell,
  CellGroup,
  CheckBox,
  CheckBoxGroup,
  Collapse,
  CollapseItem,
  Loading,
  Toast
}

export default {
  install
}