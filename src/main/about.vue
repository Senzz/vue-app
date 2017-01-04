<template>
    <div class="about">
        <h3>
            <a :href='github'>Sen / Vue-app</a>   
        </h3>
        <p>
            刚开始学习Vue.js，写个简单的SPA
        </p>
        <p>
            邮箱地址: {{email}}<br /> 
        </p>
        <p>
            欢迎前来交流
        </p>
        <p>
            <a :href='github'>求个Star！(づ｡◕‿‿◕｡)づ</a>
        </p>
    </div>
    
</template>

<script>
    export default {
        data() {
            return {
                github: 'https://github.com/825618507/vue-app',
                email: '825618507@qq.com'
            }
        }
    }    
</script>

<style>
    .about{
        margin:2rem 0.3rem;
        padding:6rem 0;
        border-top:0.3rem solid #c7543d;
        text-align:center;
        background:#6bdd9c;
        font-size:1.2rem;
    }
    .about p{
        margin:1rem 0;
    }
</style>