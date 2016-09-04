import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    cityName: '广州',
    weatherDate:[],
    apikey: '0df81e6fd1a14e54479b4375f5413421'
}

const mutations = {
    SET_CITY (state, value){
        state.cityName = value;
    },
    SET_WEATHERDATA (state, arr){
        state.weatherData = arr;
    }
}

export default new Vuex.Store({
    state,
    mutations,
})