import Button from './button'

const components = [
  Button
]

const install = Vue => {
  components.forEach(Component => {
    console.log(Component)
    Vue.use(Component)
  })
}
// 支持使用标签的方式引入
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  install,
  Button
}

export default {
  install
}