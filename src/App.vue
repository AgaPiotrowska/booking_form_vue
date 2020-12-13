

<template>
  <div id="app">
    <BookingForm
            v-bind:price="129"
            v-bind:rating="{value: 2.9, count: 150}"/>

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


