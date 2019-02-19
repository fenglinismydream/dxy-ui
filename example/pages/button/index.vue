<template>
  <dxy-button type="default" size="small" @click="onclick">{{ 'default-small' }}</dxy-button>
</template>

<script>
export default {
  methods: {
    onclick () {
      console.log(111)
    }
  }
}
</script>
