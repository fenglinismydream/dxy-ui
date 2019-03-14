<template>
  <div>
    <dxy-datetime-picker
      v-model="currentDate"
      type="datetime"
      :min-date="minDate"
      :max-date="maxDate"
    ></dxy-datetime-picker>
    <dxy-datetime-picker
      v-model="currentDate"
      type="date"
      :max-date="maxDate"
    ></dxy-datetime-picker>
  </div>
</template>

<script>
export default {
  data () {
    return {
      minHour: 10,
      maxHour: 20,
      minDate: new Date(),
      maxDate: new Date(new Date().getFullYear() + 100, 12, 31),
      currentDate: new Date()
    }
  }
}
</script>
