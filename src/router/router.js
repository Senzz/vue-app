import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({})

router.map({
    '/weather': {
        name: 'weather',
        component: (resolve) => {
            require(['../components/weather.vue'], resolve)
        }
    },
    '/technology': {
        name: 'technology',
        component: (resolve) => {
            require(['../components/technology_news.vue'], resolve)
        }
    },
    '/about': {
        name: 'about',
        component: (resolve) => {
            require(['../components/about.vue'], resolve)
        }
    }
})

export default router