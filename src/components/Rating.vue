<template>
    <div class="star-container">
        <div v-for="(star, index) in stars" v-bind:key="index"><img class="star" v-bind:src="star"/></div>
        <div class="rating-count text-small-bold">{{rating.count}}</div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                stars: []
            }
        },
        props: ["rating"],
        created: function () {
            const fullNumber = Math.floor(this.rating.value);
            const fraction = this.rating.value - fullNumber;
            for (let i = 0; i < fullNumber; i++) {
                this.stars.push("/assets/star-full.svg");
            }
            if (fraction < 0.2) {
                this.stars.push("/assets/star-empty.svg")
            } else if (fraction < 0.8) {
                this.stars.push("/assets/star-half.svg")
            } else {
                this.stars.push("/assets/star-full.svg")
            }
            for (let i = this.stars.length; i < 5; i++) {
                this.stars.push("/assets/star-empty.svg")
            }
        }
    }
</script>

<style>
    .star {
        height: 10px;
    }

    .star-container {
        display: flex;
        align-items: center;
    }

    .rating-count {
        margin-left: 4px;
    }
</style>
