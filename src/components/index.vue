<template>
    <div class='container'>
        <header>
            <nav class='nav'>
                <router-link to="/weather">天气查询</router-link>
                <router-link to="/news">科技新闻</router-link>
                <router-link to="/about">关于</router-link>
            </nav>
        </header>
        <!-- 缓存 -->
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>


    export default {

        beforeMount() {
            //默认为weather
            this.$router.push('weather');
        },

    }
</script>
<style>
    .container{
        padding:0.5rem;
    }
    html{
        font-family: Helvetica, 'Hiragino Sans GB', 'Microsoft Yahei', '微软雅黑', Arial, sans-serif;
    }
    *{
        padding:0;
        margin:0;
    }
    a{
        text-decoration:none;
    }
    header .nav{
        display:flex;
        height:4rem;
        font-size:1.5rem;
    }
    header .nav > a{
        display:block;
        border:0.1rem solid;
        height:100%;
        line-height:4rem;
        flex:1;
        text-align:center;
        background:#63524f;
        color:#fff;
        border-radius:0.4rem;
    }
    /*变色效果*/
    header .nav .router-link-active{
        background-color:#da0041;
    }
</style>