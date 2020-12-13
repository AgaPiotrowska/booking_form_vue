

<template>
  <div id="app">
    <BookingForm v-bind:price="129"/>

  </div>
</template>

<script>
import BookingForm from './components/BookingForm.vue'

export default {
  name: 'App',
  components: {
    BookingForm
  }
}
</script>


