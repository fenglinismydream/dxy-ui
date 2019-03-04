<template>
  <div>
    <div @click="handleaaaa">点击我!!!!!</div>
    <!-- <input type="che"> -->
  </div>
</template>

<script>
export default {
  model: {
    prop: 'checked',
    event: 'change'
  },
  data () {
    return {
    }
  },
  mounted () {
    this.$toast.loading({
      mask: true,
      duration: 0,
      message: '加载中...'
    })
  },
  methods: {
    handleaaaa () {
      console.log(this.$toast)
      this.$toast('加载中')
    }
  }
}
</script>