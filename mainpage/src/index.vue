<script>
import Topbar from './Topbar.vue';
import App from './App.vue';
export default {
    // props: 
    data() {
        return {
            TopbarSites: [
                {u:'#', n:'top'}
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