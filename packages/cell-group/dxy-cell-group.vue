<template>
  <div :class="[
    createClass(),
    {
      'dxy-hairline--top-bottom': border
    }
  ]">
    <slot></slot>
  </div>
</template>

<script>
import create from '../utils/create'
export default create({
  name: 'cell-group',

  props: {
    border: {
      type: Boolean,
      default: true
    }
  }
})
</script>
