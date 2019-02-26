<template>
  
</template>

<script>
import create from '../utils/create'
export default {
  name: 'checkbox-group',

  props: {
    value: Array,
    disabled: Boolean,
    max: {
      type: Number,
      default: 0
    }
  },

  watch: {
    value (val) {
      this.$emit('change', val)
    }
  }
}
</script>
