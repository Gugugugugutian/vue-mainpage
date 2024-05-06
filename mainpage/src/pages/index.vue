<script>
import Topbar from '../Topbar.vue';
import App from '../App.vue';
export default {
    data() {
        return {
            TopbarSites: [
                {u:'#', n:'搜索'},
                {u:'#document', n:'文档'},
                {u:'#changyong', n:'常用'},
                {u:'#campus', n:'校园'},
                {u:'#ebook', n:'读书'},
                {u:'#xuexi', n:'学习'},
                {u:'#tools', n:'工具'},
                {u:'#entertain', n:'娱乐'},
                {u:'#oldv', n:'旧版'},
            ]
        }
    },
    components: {
    Topbar,
    App
}
}
</script> 
<template>
    <!-- 顶部栏 -->
    <Topbar :tsites="TopbarSites"></Topbar>
    
    <!-- 主屏幕 -->
    <App></App>
</template>