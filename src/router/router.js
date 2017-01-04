import VueRouter from 'vue-router'

//components
const chat = require('../main/chat.vue'),
	  weather = require('../main/weather.vue'),
	  news = require('../main/news.vue'),
	  about = require('../main/about.vue');

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
    	{ path: '/chat', component: chat },
        { path: '/weather', component: weather },
        { path: '/news', component: news },
        { path: '/about', component: about }
    ]
})


export default router