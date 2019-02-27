<template>
  <div
    :class="[
      createClass({ expanded }),
      {'dxy-hairline--top': index}
    ]"
  >
    <dxy-cell :class="createClass('title')" @click="onClick" v-bind="$props">
      <slot name="icon" slot="icon"></slot>
      <slot name="title" slot="title"></slot>
      <slot name="value"></slot>
      <slot name="right-icon" slot="right-icon"></slot>
    </dxy-cell>

    <div v-if="inited" v-show="show" ref="wrapper" :class="createClass('wrapper')" @transitionEnd="onTransitionEnd">
      <div ref="content" :class="createClass('content')" :style="{backgroundColor: contentBg}">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import create from '../utils/create'
import DxyCell from '../cell/index'
import findParent from '../mixins/find-parent'
import {isDef} from '../utils/index'

export default create({
  name: 'collapse-item',
  mixins: [findParent],
  components: {
    DxyCell
  },
  props: {
    name: [String, Number],
    icon: String,
    label: String,
    title: [String, Number],
    value: [String, Number],
    contentBg: {
      type: String,
      default: '#fff'
    },
    titleWidth: String,
    border: {
      type: Boolean,
      default: true
    },
    isLink: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    items () {
      return this.parent.items
    },
    index () {
      return this.items.indexOf(this)  
    },
    currentName () {
      return isDef(this.name) ? this.name : this.index
    },
    expanded () {
      if (!this.parent) return null
      const { value } = this.parent
      return this.parent.accordion
        ? value === this.currentName
        :value.some(item => item === this.currentName)
    }
  },
  watch: {
    expanded (current, prev) {
      if (prev === null) return
      if (current) {
        this.inited = true
        this.show = true
      }
      this.$nextTick(() => {
        const { wrapper, content } = this.$refs
        if (!wrapper && !content) return
        const contentHeight = content.clientHeight + 'px'
        const animationFn = window.requrestAnimationFrame || window.webkitRequestAnimationFrame
        wrapper.style.height = current ? 0 : contentHeight
        animationFn(() => {
          wrapper.style.height = current ? contentHeight : 0
        })
      })
    }
  },
  created() {
    this.findParent('dxy-collapse')
    this.items.push(this)
    this.show = this.expanded
    this.inited = this.expanded
  },
  destroyed() {
    this.items.splice(this.index, 1)
  },
  methods: {
    onClick () {
      const { parent } = this
      const name = parent.accordion && this.currentName === parent.value ? '' : this.currentName
      const expanded = !this.expanded
      this.parent.switch(name, expanded)
    },
    onTransitionEnd () {
      if (!this.expanded) {
        this.show = false
      } else {
        this.$refs.wrapper.style.height = null
      }
    }
  },
})
</script>
