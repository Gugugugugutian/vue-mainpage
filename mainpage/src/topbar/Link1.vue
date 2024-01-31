<!-- 创建顶部栏的链接 -->
<script>
    export default {
        props: {
            url: {
                type: String,
                default: '/'
            },
            content: {
                type: String,
                default: 'null'
            }
        }
    };
</script>
<template>
    <a :href=url>{{ content }}</a>
</template>
<style>
    #top a {
        display: block;
        font-size: 4vh;
        font-weight: bold;
        /* background-color: antiquewhite; */
        height: 7vh;
        text-decoration: none;
        margin-left: 7px;
        margin-right: 7px;
        border-bottom: 1.5px solid darkblue;
    }
    #top a:hover {
    color: rgb(241, 255, 172);
    border-color: rgb(241, 255, 172);
    }   
</style>