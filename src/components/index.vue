<template>
    <div class='container'>
        <header>
            <nav class='nav'>
                <a v-link="{name: 'weather', activeClass: 'a_active'}">天气查询</a>
                <a v-link="{name: 'technology', activeClass: 'a_active'}">科技新闻</a>
                <a v-link="{name: 'bar', activeClass: 'a_active'}">待定</a>
            </nav>
        </header>
        <router-view keep-alive></router-view>
    </div>
</template>

<script>
    import store from '../vuex/store'

    export default {

        ready() {
            //默认为weather
            this.$router.go('weather');
        },
        store,
    }
</script>
<style>
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
        height:2rem;
    }
    header .nav>a{
        display:block;
        border:0.1rem solid;
        height:2rem;
        line-height:2rem;
        flex:1;
        text-align:center;
        background:#63524f;
        color:#fff;
        border-radius:0.4rem;
    }
    header .nav>a.a_active{
        background-color:red;
    }
</style>