import { createRouter, createWebHashHistory } from "vue-router";
import Home from '../pages/Home.vue';

const routes = [{
        path: '/home',
        component: Home,
        alias: '/'
    },
    // {
    //     path: '',
    //     component,
    // }
]

const router = createRouter({
    routes,
    history: createWebHashHistory()
})

export default router;