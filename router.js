import Vue from "vue";
import Router from 'vue-router';
import Home from './src/views/LoginView';
import Game from './src/views/GameView.vue';

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/game',
            name: 'Game',
            component: Game
        }
    ]
})

export default router;