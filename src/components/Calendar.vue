<template>
    <div>
        <div class="calendar-header">
            <img class="calendar-arrow" src="/assets/arrow-left.svg" @click="getPreviousMonth"/>
            <div class="calendar-month text-big ">{{currentMonth.month}} {{currentMonth.year}}</div>
            <img class="calendar-arrow" src="/assets/arrow-right.svg" @click="getNextMonth"/>
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
            <div class="calendar-day"
                 v-for="(day, index) in days"
                 v-bind:key="index"
                 @click="selectDay(day)"
            >
                <div class="calendar-day-inner"
                     v-bind:class="{today: day.isToday, available: day.isAvailable, start: day.isStart, end: day.isEnd}"
                >
                    {{day.day}}
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                days: [],
                currentMonth: null,
                currentDate: new Date(),
                today: new Date(),
                startDate: null,
                endDate: null
            }
        },
        props: ["availableDays"],
        methods: {
            selectDay(day) {
                if (this.startDate != null && this.endDate === null) {
                    this.endDate = new Date(day.fullDate);
                } else {
                    this.endDate = null;
                    this.startDate = new Date(day.fullDate)
                }
                this.calculateDays(this.currentDate)
            },

            getPreviousMonth() {
                this.currentDate = new Date(this.currentDate.setMonth(this.currentDate.getMonth() - 1));
                this.calculateDays(this.currentDate)
            },
            getNextMonth() {
                this.currentDate = new Date(this.currentDate.setMonth(this.currentDate.getMonth() + 1));
                this.calculateDays(this.currentDate)
            },

            calculateDays(dayInMonth) {
                this.days = [];
                const firstDayOfMonth = getFirstDayOfMonth(dayInMonth);
                this.currentMonth = {
                    month: monthNames[firstDayOfMonth.getMonth()],
                    year: firstDayOfMonth.getFullYear()
                }
                const currentDate = getFirstDayOfWeek(firstDayOfMonth);
                const lastDayOfMonth = getLastDayOfMonth(dayInMonth);
                while (currentDate.getDay() !== 0 || currentDate.getTime() < lastDayOfMonth.getTime()) {
                    this.days.push({
                        day: currentDate.getDate(),
                        fullDate: new Date(currentDate),
                        isToday: isSameDays(currentDate, this.today),
                        isAvailable: this.isDayAvailable(currentDate),
                        isStart: isSameDays(currentDate, this.startDate),
                        isEnd: isSameDays(currentDate, this.endDate)
                    });
                    currentDate.setDate(currentDate.getDate() + 1);

                }
            },
            isDayAvailable(dayToCheck) {
                return this.availableDays.some(day => isSameDays(new Date(day.year, day.month - 1, day.day), dayToCheck));
            }
        },
        created: function () {
            this.calculateDays(this.currentDate)
        }
    }
    const isSameDays = (first, second) => {
        if (first === null || second === null) {
            return false
        }
        return first.getFullYear() === second.getFullYear() && first.getMonth() === second.getMonth()
            && first.getDate() === second.getDate()
    }

    const getFirstDayOfMonth = (dayInMonth) => {
        return new Date(dayInMonth.getFullYear(), dayInMonth.getMonth(), 1);
    };

    const getLastDayOfMonth = (dayInMonth) => {
        return new Date(dayInMonth.getFullYear(), dayInMonth.getMonth() + 1, 0);
    }

    const getFirstDayOfWeek = (date) => {
        const currentDate = new Date(date);
        while (currentDate.getDay() !== 0) {
            currentDate.setDate(currentDate.getDate() - 1);
        }
        return currentDate;
    }

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
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
        cursor: pointer;
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
        padding: 6px;
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

    .today {
        color: #00DBB1;
        border: 3px solid #00DBB1;
        border-radius: 50%;
    }

    .calendar-day-inner {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        color: lightgray;
    }

    .calendar-day-inner.available {
        color: #787676;
        cursor: pointer;
    }

    .start, .end {
        background-color: #00DBB1;
        color: white !important;
        border-radius: 50%;
    }

</style>
