<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
@import "~$pkg/dxy-style/index.less";
html{
  h1 {
    color: red
  }
  padding: 0px;
}
</style>

