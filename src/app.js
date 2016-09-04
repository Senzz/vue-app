

import Vue from "vue"
import VueResource from 'vue-resource'
import router from './router/router.js'
import { sync } from 'vuex-router-sync'

//components
import app from './components/index.vue'
import store from './vuex/store'



Vue.config.debug = true;      //开启错误提示

Vue.config.devtools = true;

Vue.use(VueResource)

sync(store, router)

router.start(app,'#app');
