<template>
  <transition name="dxy-fade">
    <div
      v-show="visible"
      :class="createClass()"
      :className="className"
      :style="style"
      @click="$emit('clcik', $event)"
    ></div>
  </transition>
</template>

<script>
import create from '../utils/create'
export default {
  name: 'modal',
  props: {
    visible: Boolean,
    zIndex: Number,
    className: String,
    cutomStyle: Object
  },
  computed: {
    style () {
      return {
        zIndex: this.zIndex,
        ...this.cutomStyle
      }
    }
  }
}
</script>
