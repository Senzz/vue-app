import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    cityName: '广州',
    weatherDate:[]
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