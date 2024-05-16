<template>
    <div>
        <nav>
            <router-link to="/">back</router-link>
        </nav>
        <div class="game_container">
            <GameButton @GameNumber="CountScore" />
            <ScoreBoard :score="score" />
        </div>
    </div>
</template>

<script>
import GameButton from '@/components/GameButton.vue';
import ScoreBoard from '@/components/ScoreBoard.vue';
import Cookies from 'vue-cookies';
    export default {
        components:{
            GameButton, ScoreBoard
        },
        data() {
            return {
                score: {
                    wins: 0,
                    losses: 0,
                }
            }
        },
        methods: {
            CountScore: function(number){
                if(number >= 50){
                    this.score.wins++
                }else{
                    this.score.losses++
                }
                Cookies.set('GameScore', this.score)
            }
        },
        beforeMount() {
            this.score = Cookies.get('GameScore')
            
        },
    }
</script>

<style lang="css" scoped>

</style>