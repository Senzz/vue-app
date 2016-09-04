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
    '/bar': {
        name: 'bar',
        component: (resolve) => {
            require(['../components/bar.vue'], resolve)
        }
    }
})

export default router