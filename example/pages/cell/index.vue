<template>
  <div>
    <dxy-cell-group>
      <dxy-cell title="1212" is-link></dxy-cell>
      <dxy-cell icon="choose" title="1221" value="你是谁"></dxy-cell>
      <dxy-cell icon="choose" inputAlign="right" title="1212" value="你是谁" is-link></dxy-cell>
      <dxy-cell label="choose" title="1212" value="你是谁" is-link></dxy-cell>
    </dxy-cell-group>
  </div>
</template>

<script>
export default {
  data () {
    return {
      fieldValue: 'asdfasd'
    }
  }
}
</script>
