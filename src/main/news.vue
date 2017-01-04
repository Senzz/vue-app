<template>
    <div class='newsList'>
        <article class='new_every' v-for='item of newsList' >
            <a :href="item.url">
                <div class='title'>
                    <p>{{item.title}}</p>
                    <p class='date'>{{item.ctime}}</p>
                </div>
                <div class='img'>
                    <img :src="item.picUrl" :alt="item.title" />
                </div>
            </a>
        </article>
        <loading v-show='loading' class='news_loading'></loading>
        <button type="button" class='more_btn' @click='getTechnologyNews'>更多</button>
    </div>
</template>


<script>
    import loading from './../components/loading.vue'
    import apikey from './../apikey.js'

    export default {
        data() {
            return {
                newsList: [],
                loading: false,
                page: 1,
                apikey: apikey
            }
        },
        components: {
          loading
        },
        methods: {
            getTechnologyNews() {
                this.$http({
                    url: 'http://apis.baidu.com/txapi/world/world',
                    method: 'GET',
                    headers: {
                        apikey: this.apikey,
                    },
                    params: {
                        num: 5,                //每次获取的数量
                        page: this.page++,     //每次加一
                    },
                    before: function(){
                        this.loading = true;
                    }
                })
                .then(function(response){
                    this.loading = false;
                    const data = response.data;

                    //判断是否成功
                    console.log(data)
                    if(data.msg == 'success'){
                        //第一页
                        if(this.page === 0){
                            this.newsList = data.newslist;
                            window.sessionStorage.setItem('technology_news', JSON.stringify(this.newsList));
                        }else{
                            this.newsList = this.newsList.concat(data.newslist);
                        }
                    }else{
                        alert('新闻获取失败');
                    }
                },function(){
                    this.loading = false;
                    alert('获取新闻失败，1s后重新获取');
                    this.getTechnologyNews();
                })
            }
        },
        beforeMount() {
            this.getTechnologyNews();

        }
    }
</script>

<style>
    .newsList{
        margin-top:0.2rem;
        padding-top:0.1rem;
        background-color:rgb(245,245,245);
    }
    .new_every{
        width: 100%;
        margin:0.7rem 0;
        padding:0.1rem;
        height:8rem;
        box-sizing:border-box;
        background-color:#fff;
    }
    .new_every>a {
        display:flex;
        color:#000;
        height:100%;
    }
    .new_every .title{
        width:70%;
        padding-right:0.5rem;
        font-size:1.2rem;
        position:relative;
    }
    .new_every .title p.date{
        position:absolute;
        bottom:0;
        color:#b2bac2;
    }
    .new_every .img{
        flex:1;
    }
    .new_every .img img{
        width:100%;
        height:100%;
        display:block;
        float:right;
    }
    .more_btn{
        margin-top:0.5rem;
        width:100%;
        height:2.5rem;
        background-color:#252e39;
        border-radius:10px;
        color:#fff;
        font-size:1rem;
    }
    .news_loading{
        margin-top:-2rem;
        margin-bottom:7rem;
    }
</style>