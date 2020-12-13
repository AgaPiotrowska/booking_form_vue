<template>
    <div>
        <div class="calendar-header">
            <img class="calendar-arrow" src="/assets/arrow-left.svg"/>
            <div class="calendar-month text-big ">Calendar</div>
            <img class="calendar-arrow" src="/assets/arrow-right.svg"/>
        </div>
        <div class="days-of-week">
            <div>Sun</div>
            <div>Mon</div>
            <div>Tue</div>
            <div>Wed</div>
            <div>Thu</div>
            <div>Fri</div>
            <div>Sat</div>
        </div>
        <div class="calendar-days">
            <div class="calendar-day" v-for="(day, index) in days" v-bind:key="index">{{day.day}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                days: []
            }
        },
        created: function () {
            const currentDate = getFirstDayOfWeek(getFirstDayOfMonth());
            const lastDayOfMonth = getLastDayOfMonth();
            console.log(currentDate, lastDayOfMonth);
            while(currentDate.getDay() !== 0 || currentDate.getTime() < lastDayOfMonth.getTime()) {
                this.days.push({
                    day: currentDate.getDate()
                });
                currentDate.setDate(currentDate.getDate()+1);
            }
        }
    }
   const getFirstDayOfMonth = () => {
       const now = new Date();
       return new Date(now.getFullYear(), now.getMonth(), 1);
    };

    const getLastDayOfMonth = () => {
        const now = new Date();
        return new Date(now.getFullYear(), now.getMonth()+1, 0);
    }

    const getFirstDayOfWeek = (date) => {
        const currentDate = new Date(date);
        while(currentDate.getDay() !== 0) {
            currentDate.setDate(currentDate.getDate()-1);
        }
        return currentDate;
    }
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

    .calendar-days {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        grid-template-rows: repeat(6, 1fr);
        gap: 0px 0px;
    }

    .calendar-days::before {
        content: '';
        width: 0;
        padding-bottom: 100%;
        grid-row: 1 / 1;
        grid-column: 1 / 1;
    }

    .calendar-days > *:first-child {
        grid-row: 1 / 1;
        grid-column: 1 / 1;
    }

    .calendar-day {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .days-of-week {
        display: flex;
        justify-content: space-around;
        width: 100%;
        margin-top: 10px;
        font-weight: bold;
    }

    .days-of-week div {
        color: darkgray;
    }


</style>
