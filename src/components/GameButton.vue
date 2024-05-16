<template>
    <div id="GameButton">
        <div class="button_container">
            <button @click="getNumber">Click</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'GameButton',
    data() {
        return {
            number: 0,
        }
    },
    methods: {
        getNumber: function () {
            axios.request({
                url: "https://www.random.org/integers/",
                params: {
                    num: 1,
                    min: 1,
                    max: 100,
                    col: 1,
                    base: 10,
                    format: 'plain',
                    rnd: 'new'
                }
            }).then((response) => {
                // console.log(response)
                this.number = response.data;
                this.$emit('GameNumber', this.number)
            }).catch((error) => { console.log(error) })
           
        },
    },
}
</script>

<style scoped>
button{
    background-color: darkblue;
    color: white;
    padding: 30px;
}
</style>