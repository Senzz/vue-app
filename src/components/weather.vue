<template>
    <div class='weather'>
        <form @submit.prevent="getWeather" class='weather_form'>
            <input type="text"  v-model='searchCity' class='search_input' placeholder='Edit city name' />
        </form>
        <loading v-show='loading' class='weather_loading'></loading>
        <h1 class='city_name'>{{weatherCity}}</h1>
        <div class='weatherData'>
            <div v-for='item of weatherData' class='weatherData_every'>
                <h4>{{item.date}}</h4>
                <p>{{item.week}}</p>
                <p>最高温度：{{item.hightemp}}</p>
                <p>最低温度：{{item.lowtemp}}</p>
                <p>天气：{{item.type}}</p>
            </div>
        </div>
    </div>
</template> 

<script>
    import loading from './loading.vue'
    import apikey from './../apikey.js'

    export default {
        data() {
            return {
                searchCity: '广州',
                loading: false,
                weatherCity:'',
                weatherData:[],
                apikey: apikey
            }
        },
        components: {
          loading
        }, 
        methods: {
            getWeather(){
                this.$http.get('http://apis.baidu.com/apistore/weatherservice/recentweathers',
                    {
                        headers: {
                            apikey: this.apikey
                        },
                        params: {
                            cityname: this.searchCity
                        },
                        before: function(){
                            this.loading = true;
                        }
                    })
                .then(function(response){
                    this.loading = false;
                    const data = JSON.parse(response.body),
                          retData = data.retData;
                    //是否有该城市数据
                    if(data.errNum != -1){
                        //判断有没获取到
                        if(retData.forecast){
                            this.weatherCity = retData.city;
                            this.weatherData = retData.forecast;
                        }else{
                            this.getWeather();
                        }
                    }else{
                        alert('没有该城市数据，请重新输入');
                    }
                },function(){
                    alert('获取天气数据失败，1s后重新获取');
                    this.getWeather();
                });
            }
        },
        beforeMount(){
            this.getWeather();
        },
    }
</script>

<style>
   .weather{
        width:100%;
        margin:0.5rem auto 0;
        text-align:center;
    }
    .search_input{
        width:90%;
        height:3rem;
        padding-left:0.5rem;
        margin-bottom:1rem;
        border:0.3rem solid #ccc;
        font-size:2rem;
    }
    .city_name{
        font-size:2rem;
    }
    div.before_img>img{
        width:100%;
        height:7rem;
    }
    .weatherData{
        margin-top:0.8rem;
        display:flex;
        flex-flow:row wrap;
    }
    .weatherData_every{
        width:100%;
        box-sizing:border-box;
        margin:0.1rem;
        padding:2.5rem 1.2rem;
        background:rgb(81,182,176);
        font-size:1.2rem;
    }
    .weatherData_every>*{
        margin:0.3rem  0;
    }
    .weather_loading{
      margin-top:-4rem;
      margin-bottom:7rem;
    }
</style>