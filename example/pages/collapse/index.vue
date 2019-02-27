<template>
  <div>
    <dxy-collapse v-model="collapseData" accordion>
      <dxy-collapse-item title="啊啊啊啊" name="1" contentBg="#f8f8f8">3223232</dxy-collapse-item>
    </dxy-collapse>
  </div>
</template>

<script>
export default {
  data () {
    return {
      collapseData: []
    }
  }
}
</script>