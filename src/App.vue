

<template>
  <div id="app">
    <BookingForm
            v-bind:price="129"
            v-bind:rating="{value: 2.9, count: 150}"
            v-bind:availableDays="availableDays"
    />

  </div>
</template>

<script>
import BookingForm from './components/BookingForm.vue'

export default {
  name: 'App',
  components: {
    BookingForm
  },
  data() {
    return {
      availableDays: [
        { year: 2020, month: 12, day: 25 },
        { year: 2020, month: 12, day: 26 },
        { year: 2020, month: 12, day: 30 },
        { year: 2020, month: 12, day: 31 },
      ]
    }
  },
}
</script>


