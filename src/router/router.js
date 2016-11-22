
import VueRouter from 'vue-router'

//components
const weather = require('../components/weather.vue');
const news = require('../components/news.vue');
const about = require('../components/about.vue');

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        { path: '/weather', component: weather },
        { path: '/news', component: news },
        { path: '/about', component: about }
    ]
})


export default router