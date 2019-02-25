<template>
  <div>
    <dxy-checkbox v-model="checkbox"></dxy-checkbox>
    <!-- <dxy-checkbox v-model="checkbox2" @change="onChange"></dxy-checkbox> -->
    <dxy-checkbox v-model="checkbox3" disabled></dxy-checkbox>
    <dxy-checkbox v-model="checkbox4" disabled></dxy-checkbox>
  </div>
</template>

<script>
export default {
  data () {
    return {
      checkbox: false,
      checkbox2: false,
      checkbox3: false,
      checkbox4: true
    }
  },
  methods: {
    onChange (val) {
      this.$dialog.alert({
        title: '标题',
        message: '您触发了change事件' + val
      })
    }
  }
}
</script>
