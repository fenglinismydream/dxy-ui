<template>
  <div
    :class="[
      createClass({
        clickable: isLink || clickable
      }),
      { 'dxy-hairline': border}
    ]"
    @click="onClick"
  >
    <slot name="icon">
      <dxy-icon v-if="icon" :name="icon" :class="createClass('left-icon')"></dxy-icon>
    </slot>

    <div
      v-if="title || $slots.title"
      :class="[
        createClass('title'),
        {'no-value': !value && !$slots.default}
      ]"
      :style="[{width: titleWidth, flex: `0 0 ${titleWidth}`}]">
      <slot name="title">
        <span v-text="title"></span>
        <div v-if="label" v-text="label" :class="createClass('label')"></div>
      </slot>
    </div>

    <div v-if="value || $slots.default" :class="createClass('value', inputAlign)">
      <slot>
        <span v-text="value"></span>
      </slot>
    </div>

    <slot name="right-icon">
      <dxy-icon v-if="isLink" name="right" :class="createClass('right-icon')"></dxy-icon>
    </slot>
  </div>
</template>

<script>
import create from '../utils/create'
import DxyIcon from '../icon/index'
export default create({
  name: 'cell',
  components: {
    DxyIcon
  },
  props: {
    icon: String,
    title: [String, Number],
    label: String,
    value: String,
    titleWidth: String,
    inputAlign: {
      type: String,
      default: 'right'
    },
    clickable: {
      type: Boolean,
      default: false
    },
    isLink: Boolean,
    border: {
      type: Boolean,
      default: true
    }
  },
  mounted() {
    // console.log((!this.value && !this.$slots.default) ? 1 : '')
    console.log(this.$slots.default)
  },
  methods: {
    onClick () {
      this.$emit('click')
    }
  },
})
</script>

