import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home';
import Todos from '@/pages/Todos';

Vue.use(Router)

let router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/todos',
            component: Todos
        }
    ]
})

export default router;