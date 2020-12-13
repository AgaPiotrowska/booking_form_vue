<template>
  <div class="booking-container">
    <div class="border-container">
      <h2>Price</h2>
      <div>ratings</div>
      <div class="border-bottom"></div>
      <h3 class="dates">Dates</h3>
      <div class="check-container">
        <h2>Check In</h2>
        <img src="../assets/arrow.svg"/>
        <h2>Check Out</h2>
      </div>
    </div>
  </div>
</template>

<script>
// export default {
//
// }
</script>

<style>

  .booking-container {
    height: 450px;
    width: 450px;
    background-color: #ECECEC;
    margin: auto;
    padding: 15px;
  }

  .border-container {
    border: 2px solid #DBDBDB;
    height: 100%;
    width: 100%;
    padding: 15px;
  }

  .border-bottom {
    border-bottom: 2px solid #DBDBDB;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .check-container {
    display: flex;
    border: 2px solid #DBDBDB;
  }

  .check-container h2 {
    margin: 7px 15px;
    font-weight: lighter;
  }

  .check-container img {
    margin: 0 20px;
  }
</style>
