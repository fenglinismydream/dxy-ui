import Vue from 'vue'
import Toast from './toast'
import {isObj} from '../utils/index'

const defaultOptions = {
  type: 'text',
  value: true,
  message: '',
  position: 'middle',
  duration: 3000,
  mask: false
}

const queue = []
const multiple = false
const currentOptions = {...defaultOptions}

const parseOptions = message => isObj(message) ? message : { message }

function createToast () {
  if (!queue.length || multiple) {
    const toast = new (Vue.extend(Toast))({
      el: document.createElement('div')
    })
    document.body.appendChild(toast.$el)
    queue.push(toast)
  }
  return queue[queue.length - 1]
}

function newToast (options = {}) {
  const toast = createToast()

  options = {
    ...currentOptions,
    ...parseOptions(options),
    clear () {
      toast.value = false
    }
  }
  Object.assign(toast, options)
  clearTimeout(toast.timer)

  if (options.duration > 0) {
    toast.timer = setTimeout(() => {
      toast.clear()
    }, options.duration);
  }
  return toast
}
const createMethod = type => options => newToast({
  type, ...parseOptions(options)
});
['loading'].forEach(method => {
  newToast[method] = createMethod(method)
})
newToast.install = (Vue) => {
  Vue.component(newToast.name, newToast)
}
Vue.prototype.$toast = newToast

export default newToast
