<template>
  <div :class="createClass([type, colorType])" :style="style">
    <span :class="createClass('wrapper', type)">
      <i v-for="(item, index) in (type === 'spinner' ? 12 : 0)" :key="index"></i>
      <svg v-if="type === 'circular'" :class="createClass('svg-circular')" viewBox="25 25 50 50">
        <circle cx="50" cy="50" r="20" fill="none"></circle>
      </svg>
    </span>
  </div>
</template>

<script>
import create from '../utils/create'
import modal from '../modal/index'
export default create({
  name: 'loading',
  mixins: [modal],
  props: {
    size: String,
    mask: {
      type: Boolean,
      default: false
    },
    value: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: 'circular'
    },
    color: {
      type: String,
      default: '#c9c9c9'
    },
    lockScroll: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    colorType () {
      const {color} = this
      return color === 'white' || color === 'black' ? color : ''
    },
    style () {
      return {
        color: this.color === 'black' ? '#c9c9c9' : this.color,
        width: this.size,
        height: this.size
      }
    }
  },
})
</script>

