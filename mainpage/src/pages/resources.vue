<script>
import Topbar from '../Topbar.vue'
import App1 from '../App1.vue'
export default {
    data() {
        return {
            t: "Resources",
            TopbarSites: [
                { u: '#', n: '顶部' },
            ]
        }
    },
    components: {
        Topbar,
        App1
    }
}
</script>

<template>
    <Topbar :tsites="TopbarSites" :t="t"></Topbar>
    <App1></App1>
</template>
<style>
</style>