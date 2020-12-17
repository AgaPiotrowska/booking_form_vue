<template>
  <div id="app">
    <div class="text-big">Few days in December</div>
    <BookingForm
            v-bind:price="129"
            v-bind:rating="{value: 6, count: 150}"
            v-bind:availableDays="availableDaysFewDays"
    /><br>
    <div class="text-big">Full January</div>
    <BookingForm
            v-bind:price="299"
            v-bind:rating="{value: 5.0, count: 20}"
            v-bind:availableDays="availableDaysFullMonth"
    /><br>
    <div class="text-big">Half February</div>
    <BookingForm
            v-bind:price="319"
            v-bind:rating="{value: 3.5, count: 10}"
            v-bind:availableDays="availableDaysHalfMonth"
    /><br>
    <div class="text-big">December and January</div>
    <BookingForm
            v-bind:price="519"
            v-bind:rating="{value: 0.5, count: 5}"
            v-bind:availableDays="availableDaysTwoMonths"
    />
  </div>
</template>

<script>
import BookingForm from './components/BookingForm.vue'


export default {
  name: 'App',
  components: {
    BookingForm,
  },
  data() {
    return {

      availableDaysTwoMonths: [
        { year: 2020, month: 12, day: 25 },
        { year: 2020, month: 12, day: 26 },
        { year: 2020, month: 12, day: 27 },
        { year: 2020, month: 12, day: 28 },
        { year: 2020, month: 12, day: 29 },
        { year: 2020, month: 12, day: 30 },
        { year: 2020, month: 12, day: 31 },
        { year: 2021, month: 1, day: 1 },
        { year: 2021, month: 1, day: 2 },
        { year: 2021, month: 1, day: 3 },
        { year: 2021, month: 1, day: 4 },
        { year: 2021, month: 1, day: 5 }
      ],

      availableDaysFewDays: [
        { year: 2020, month: 12, day: 25 },
        { year: 2020, month: 12, day: 26 },
        { year: 2020, month: 12, day: 30 },
        { year: 2020, month: 12, day: 31 },
      ],
      availableDaysFullMonth: [
        { year: 2021, month: 1, day: 1 },
        { year: 2021, month: 1, day: 2 },
        { year: 2021, month: 1, day: 3 },
        { year: 2021, month: 1, day: 4 },
        { year: 2021, month: 1, day: 5 },
        { year: 2021, month: 1, day: 6 },
        { year: 2021, month: 1, day: 7 },
        { year: 2021, month: 1, day: 8 },
        { year: 2021, month: 1, day: 9 },
        { year: 2021, month: 1, day: 10 },
        { year: 2021, month: 1, day: 11 },
        { year: 2021, month: 1, day: 12 },
        { year: 2021, month: 1, day: 13 },
        { year: 2021, month: 1, day: 14 },
        { year: 2021, month: 1, day: 15 },
        { year: 2021, month: 1, day: 16 },
        { year: 2021, month: 1, day: 17 },
        { year: 2021, month: 1, day: 18 },
        { year: 2021, month: 1, day: 19 },
        { year: 2021, month: 1, day: 20 },
        { year: 2021, month: 1, day: 21 },
        { year: 2021, month: 1, day: 22 },
        { year: 2021, month: 1, day: 23 },
        { year: 2021, month: 1, day: 24 },
        { year: 2021, month: 1, day: 25 },
        { year: 2021, month: 1, day: 26 },
        { year: 2021, month: 1, day: 27 },
        { year: 2021, month: 1, day: 28 },
        { year: 2021, month: 1, day: 29 },
        { year: 2021, month: 1, day: 30 },
        { year: 2021, month: 1, day: 31 }
      ],
      availableDaysHalfMonth: [
        { year: 2021, month: 2, day: 1 },
        { year: 2021, month: 2, day: 2 },
        { year: 2021, month: 2, day: 3 },
        { year: 2021, month: 2, day: 4 },
        { year: 2021, month: 2, day: 5 },
        { year: 2021, month: 2, day: 6 },
        { year: 2021, month: 2, day: 7 },
        { year: 2021, month: 2, day: 8 },
        { year: 2021, month: 2, day: 9 },
        { year: 2021, month: 2, day: 10 },
        { year: 2021, month: 2, day: 11 },
        { year: 2021, month: 2, day: 12 },
        { year: 2021, month: 2, day: 13 },
        { year: 2021, month: 2, day: 14 },
        { year: 2021, month: 2, day: 15 }
      ]
    }
  }
}
</script>


<style>
  .text-big {
    text-align: center;
  }
</style>
