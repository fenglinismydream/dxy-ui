import Button from './button'
import Icon from './icon'
import Cell from './cell'
import CellGroup from './cell-group'
import CheckBox from './checkbox'

const components = [
  Button,
  Icon,
  Cell,
  CellGroup,
  CheckBox
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
  CheckBox
}

export default {
  install
}