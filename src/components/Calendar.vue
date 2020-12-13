<template>
    <div class="calendar-header">
        <img class="calendar-arrow" src="/assets/arrow-left.svg"/>
        <div class="calendar-month text-big ">Calendar</div>
        <img class="calendar-arrow" src="/assets/arrow-right.svg"/>
    </div>
</template>

<script>
    export default {}
</script>

<style>
    .calendar-header {
        height: 50px;
        background-color: #00DBB1;
        color: white;
        align-items: center;
        display: flex;
        justify-content: center;
    }

    .calendar-arrow {
        height: 20px;
        margin-left: 20px;
        margin-right: 20px;
    }

    .calendar-month {
        flex-grow: 1;
        text-align: center;
        color: white;
    }
</style>
