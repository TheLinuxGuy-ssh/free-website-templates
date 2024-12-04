import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/index-1'
    },
    {
        path: '/index-1',
        component: () => import('../views/index1.vue')
    },
    {
        path: '/index-2',
        component: () => import('../views/index2.vue')
    },
    {
        path: '/index-3',
        component: () => import('../views/index3.vue')
    },
    {
        path: '/index-4',
        component: () => import('../views/index4.vue')
    },
    {
        path: '/index-5',
        component: () => import('../views/index5.vue')
    },
    {
        path: '/index-6',
        component: () => import('../views/index6.vue')
    },
    {
        path: '/index-7',
        component: () => import('../views/index7.vue')
    },
    {
        path: '/index-8',
        component: () => import('../views/index8.vue')
    },
    {
        path: '/index-9',
        component: () => import('../views/index9.vue')
    },
    {
        path: '/login',
        component: () => import('../views/login.vue')
    },
    {
        path: '/sign-up',
        component: () => import('../views/sign-up.vue')
    },
    {
        path: '/password-forget',
        component: () => import('../views/password-forget.vue')
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router