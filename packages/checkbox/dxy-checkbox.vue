<template>
  <div :class="createClass()">
    <div :class="createClass(
      'icon',
      [shape, 
        { disabled: isDisabled, checked }
      ]
    )" @click="onToggle">
      <slot name="icon">
        <dxy-icon name="hook"></dxy-icon>
      </slot>
    </div>
  </div>
</template>

<script>
import create from '../utils/create'
import DxyIcon from '../icon/index'
import findParent from '../mixins/find-parent'
export default create({
  name: 'checkbox',
  mixins: [findParent],
  components: {
    DxyIcon
  },
  props: {
    name: null,
    value: null,
    disabled: Boolean,
    labelPosition: String,
    labelDisabled: {
      type: Boolean,
      default: false
    },
    shape: {
      type: String,
      default: 'round'
    }
  },
  computed: {
    checked: {
      get () {
        return this.parent
          ? this.parent.value.indexOf(this.name) !== -1
          : this.value
      },
      set (val) {
        const { parent } = this
        if (parent) {
          const parentValue = this.parent.value.slice()
          if (val) {
            if (parent.max && parentValue.length >= parent.max) return
            if (parentValue.indexOf(this.name) === -1) {
              parentValue.push(this.name)
              parentValue.$emit('input', parentValue)
            }
          } else {
            const index = parentValue.indexOf(this.name)
            if (index !== -1) {
              parentValue.splice(index, 1)
              parent.$emit('input', parentValue)
            }
          }
        } else {
          this.$emit('input', val)
        }
      }
    },
    isDisabled () {
      return this.parent ? this.parent.disabled : this.disabled
    }
  },
  watch: {
    value (val) {
      this.$emit('change', val)
    }
  },
  methods: {
    onToggle (target) {
      if (!this.isDisabled && !(target === 'label' && this.labelDisabled)) {
        this.checked = !this.checked
      }
    }
  },
})
</script>
