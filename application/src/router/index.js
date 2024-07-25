import { createRouter, createWebHistory } from 'vue-router';


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'index',
            component: import("@/views/IndexView.vue")
        },
        {
            path: '/lobby',
            name: 'lobby',
            component: import("@/views/LobbyView.vue")
        }
    ]
});

export default router;
