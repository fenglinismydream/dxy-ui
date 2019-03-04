import Vue from 'vue'
import VueModal from './modal.vue'

const defaultConfig = {
  className: '',
  customStyle: {}
}

const configuration = {
  id: 1,
  zIndex: 2000,
  queue: [],
  lockCount: 0,
  plusKey (key) {
    return this[key]++
  },
  get lastQueue () {
    return this.queue[this.queue.length - 1]
  },
  open (vm, config) {
    if (!this.queue.some(item => item.vm._maskId === vm._maskId)) {
      const el = vm.$el
      const targetNode = el && el.parentNode && el.parentNode.nodeType !== 11 ? el.parentNode : document.body
      this.queue.push({ vm, config, targetNode})
      this.update()
    }
  },
  close (id) {
    const { queue } = this
    if (queue.length) {
      if (this.lastQueue.vm._maskId === id) {
        queue.pop()
        this.update()
      } else {
        this.queue = queue.filter(item => item.vm._maskId !== id)
      }
    }
  },
  update () {
    let { modal } = this

    if (!modal) {
      modal = new (Vue.extend(VueModal))({
        el: document.createElement('div')
      })
      modal.$on('click', this.onClick.bind(this))
      this.modal = modal
    }

    if (modal.$el.parentNode) {
      modal.visible = false
    }

    if (this.lastQueue) {
      const { config, targetNode } = this.lastQueue
      targetNode.appendChild(modal.$el)
      Object.assign(modal, {
        ...defaultConfig,
        ...config,
        visible: true
      })
    }
  },
  onClick () {
    if (this.lastQueue) {
      const { vm } = this.lastQueue
      vm.$emit('click-mask')
      vm.closeOnClickMask && vm.$emit('input', false)
    }
  }
}

export default {
  props: {
    value: Boolean,
    mask: Boolean,
    maskStyle: Object,
    maskClass: String,
    closeOnClickMask: Boolean,
    zIndex: [String, Number],
    getContainer: [String, Function],
    lockScroll: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      initVal: this.value
    }
  },
  watch: {
    value (val) {
      this.initVal = this.initVal || this.value
      this[val ? 'open' : 'close']()
    },
    getContainer () {
      this.move()
    },
    mask () {
      this.renderMask()
    }
  },
  created() {
    this._maskId = 'mask-' + configuration.plusKey('id')
  },
  activated () {
    this.value && this.open()
  },
  deactivated () {
    this.close()
  },
  beforeDestory () {
    this.close()
    this.getContainer && this.$parent.$el.appendChild(this.$el)
  },
  mounted() {
    this.getContainer && this.move()
    this.value && this.open()
  },
  methods: {
    open () {
      if (this.opened) return
      configuration.zIndex = this.zIndex || configuration.zIndex
      this.opened = true
      this.renderMask()
      if (this.lockScroll) {
        if (!configuration.lockCount) {
          document.body.classList.add('dxy-overflow-hidden')
        }
        configuration.lockCount++
      }
    },
    close () {
      if (!this.opened) return
      if (this.lockScroll) {
        configuration.lockCount--
        if (!configuration.lockCount) {
          document.body.classList.remove('dxy-overflow-hidden')
        }
      }
      this.opened = false
      configuration.close(this._maskId)
      this.$emit('input', false)
    },
    move () {
      let container
      const { getContainer } = this
      if (getContainer) {
        container = typeof getContainer === 'string' ? document.querySelector(getContainer) : getContainer()
      } else if (this.$parent) {
        container = this.$parent.$el
      }

      if (container) {
        container.appendChild(this.$el)
      }
    },
    renderMask () {
      if (this.mask) {
        configuration.open(this, {
          zIndex: configuration.plusKey('zIndex'),
          className: this.maskClass,
          customStyle: this.maskStyle
        })
      } else {
        configuration.close(this._maskId)
      }

      this.$nextTick(() => {
        this.$el.style.zIndex = configuration.plusKey('zIndex')
      })
    }
  },
}