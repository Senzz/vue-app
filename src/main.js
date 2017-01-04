import Vue from "vue"
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

import router from './router/router.js'


//components
import app from './index.vue'



Vue.config.debug = true;      //开启错误提示

Vue.config.devtools = true;

Vue.use(VueResource)

Vue.use(VueRouter);

new Vue({
	router,
	render: h => h(app)
}).$mount('#app');
