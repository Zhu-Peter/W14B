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
            getNumber: function(){
                axios.request({
                    url: "http://www.randomnumberapi.com/api/v1.0/randomnumber"
                }).then((response)=>{
                    this.number = response.data[0];
                    this.$emit('GameNumber', this.number)
                }).catch((error)=>{console.log(error)})
            },
        },
    }
</script>

<style scoped>

</style>