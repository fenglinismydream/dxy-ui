import Button from './button'
import Icon from './icon'

const components = [
  Button,
  Icon
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
  Icon
}

export default {
  install
}