import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'add',
        component: () => import('../src/components/UserCreate')
    },
    {
        path: '/list',
        name: 'list',
        component: () => import('../src/components/UserList')
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router