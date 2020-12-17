<template>
    <div class="booking-container">
        <div class="border-container">
            <div class="inner-container">
                <h2>{{price}} zł</h2>
                <Rating v-bind:rating="rating"/>
                <div class="border-bottom"></div>
                <h3 class="dates">Dates</h3>
                <div v-click-outside="closeCalendar">
                    <div class="check-container">
                        <h2 @click="isCalendarVisible=true">
                            <div v-if="startDateFormatted === null">Check In</div>
                            <div v-if="startDateFormatted !== null">
                                {{startDateFormatted.day}}.{{startDateFormatted.month}}
                            </div>
                        </h2>
                        <img src="/assets/right-arrows.svg" height="40px" style="flex-grow: 1"/>
                        <h2>
                            <div v-if="endDateFormatted === null">Check Out</div>
                            <div v-if="endDateFormatted !== null">{{endDateFormatted.day}}.{{endDateFormatted.month}}
                            </div>
                        </h2>
                    </div>
                    <div class="calendar-container" v-if="isCalendarVisible">
                        <Calendar
                                v-bind:availableDays="availableDays"
                                v-on:startDate="setStartDate"
                                v-on:endDate="setEndDate"
                        />
                    </div>
                </div>
                <div>
                    <button class="booking-button">BOOK NOW</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Rating from "@/components/Rating";
    import Calendar from "@/components/Calendar";

    export default {
        components: {Rating, Calendar},
        props: ["price", "rating", "availableDays"],
        data() {
            return {
                isCalendarVisible: false,
                startDateFormatted: null,
                endDateFormatted: null
            }
        },

        methods: {
            closeCalendar() {
                this.isCalendarVisible = false
            },
            setStartDate(date) {
                if (date == null) {
                    this.startDateFormatted = null
                }
                const prefixDate = (date.getDate() < 10 ? "0" : "")
                const prefixMonth = (date.getMonth() < 10 ? "0" : "")
                this.startDateFormatted = {
                    day: prefixDate + date.getDate(),
                    month: prefixMonth + (date.getMonth() + 1)
                }

            },
            setEndDate(date) {
                if (date == null) {
                    this.endDateFormatted = null
                }
                const prefixDate = (date.getDate() < 10 ? "0" : "")
                const prefixMonth = (date.getMonth() < 10 ? "0" : "")
                this.endDateFormatted = {
                    day: prefixDate + date.getDate(),
                    month: prefixMonth + (date.getMonth() + 1)
                }
            }
        }
    }
</script>

<style>

    .booking-container {
        height: 650px;
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

    .inner-container {
        position: relative;
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
        cursor: pointer;
    }

    .check-container img {
        margin: 0 20px;
    }

    .calendar-container {
        box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px;
        position: absolute;
        width: 100%;
        background-color: white;
        margin-top: 10px;
    }

    .booking-button {
        margin-top: 20px;
        background-color: indianred;
        width: 100%;
        border-radius: 5px;
        border: none;
        padding: 10px;
        font-size: 20px;
        color: white;
    }
</style>
