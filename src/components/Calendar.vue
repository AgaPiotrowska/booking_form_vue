<template>
    <div>
        <div class="calendar-header">
            <img class="calendar-arrow-left" src="/assets/arrow-left.svg" @click="getPreviousMonth"/>
            <div class="calendar-month text-big ">{{currentMonth.month}} {{currentMonth.year}}</div>
            <img class="calendar-arrow-right" src="/assets/arrow-right.svg" @click="getNextMonth"/>
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

                <div class="calendar-day-background"
                     v-bind:class="{
                    today: day.isToday,
                     available: day.isAvailable,
                     start: day.isStart,
                     end: day.isEnd,
                     between: day.isBetween
                     }"
                >
                    <div class="calendar-day-inner"
                    >
                        {{day.day}}
                    </div>
                    <div class="border-right" v-if="day.isStart || day.isBetween"></div>
                    <div class="border-left" v-if="day.isEnd || day.isBetween"></div>
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
                endDate: null,
                availableDaysFilter: []
            }
        },
        props: ["availableDays"],
        methods: {
            selectDay(day) {
                if (this.startDate != null && day.fullDate.getTime() < this.startDate.getTime()) {
                    this.startDate = null
                }
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

            countLastDayInRange() {
                if (this.startDate == null) {
                    return null;
                }

                const currentDate = new Date(this.startDate);
                currentDate.setDate(currentDate.getDate() + 1);

                for (let i = 0; i < this.availableDays.length; i++) {
                    if (!this.isDayAvailable(currentDate)) {
                        return currentDate;
                    }
                    currentDate.setDate(currentDate.getDate() + 1);
                }
                return null;
            },

            calculateDays(dayInMonth) {
                const lastDayInRange = this.countLastDayInRange();
                if (lastDayInRange == null) {
                    this.availableDaysFilter = [...this.availableDays];
                } else {
                    this.availableDaysFilter = this.availableDays.filter(d => {
                        return new Date(d.year, d.month - 1, d.day).getTime() < lastDayInRange.getTime();
                    })
                }

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
                        isEnd: isSameDays(currentDate, this.endDate),
                        isBetween: isBetween(this.startDate, this.endDate, currentDate)
                    });
                    currentDate.setDate(currentDate.getDate() + 1);

                }
            },
            isDayAvailable(dayToCheck) {
                return this.availableDaysFilter.some(day => isSameDays(new Date(day.year, day.month - 1, day.day), dayToCheck));
            }
        },
        created: function () {
            this.calculateDays(this.currentDate)
        }
    }

    const isBetween = (start, end, day) => {
        if (start == null || end == null) {
            return false;
        }
        return day.getTime() > start.getTime() && day.getTime() < end.getTime() && !isSameDays(start, day) && !isSameDays(end, day)
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

    .calendar-arrow-left, .calendar-arrow-right {
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
        padding: 6px;
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
        position: relative;
    }

    .border-right, .border-left {
        position: absolute;
        background-color: #C3FEF8;
        top: 6px;
        width: 6px;
        bottom: 6px;
    }

    .border-right {
        right: 0;
    }

    .border-left {
        left: 0;
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

    .calendar-day-inner, .calendar-day-background {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        color: lightgray;
    }

    .available .calendar-day-inner {
        color: #787676;
        cursor: pointer;
    }

    .start .calendar-day-inner, .end .calendar-day-inner {
        background-color: #00DBB1;
        color: white !important;
        border-radius: 50%;
    }

    .start {
        border-radius: 50% 0 0 50%;
        background-color: #C3FEF8;
    }

    .end {
        border-radius: 0 50% 50% 0;
        background-color: #C3FEF8;
    }

    .between .calendar-day-inner {
        background-color: #C3FEF8;
        color: #6EEAD1;
    }

</style>
