<template>
  <div id="app">
    <BookingForm/>
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

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}
</style>
