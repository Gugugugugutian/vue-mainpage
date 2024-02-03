<script>
    import Searchbar from './Searchbar.vue';
    import Iptoolkit from './compos/iptoolkit.vue';
    import List1 from './compos/list1.vue';
    import bt from './compos/bt.vue'
    export default {
        components: {
            Searchbar,
            Iptoolkit,
            List1,
            bt
        },
        data() {
            return {
                list_: ""
            }
        }
    }
</script>
<template>
    <div id="index_main">
        <div id="s">
            <Searchbar></Searchbar>
        </div>
        <div id="tk">
            <!-- toolkits -->
            <Iptoolkit></Iptoolkit>
            <Iptoolkit></Iptoolkit>
            <Iptoolkit></Iptoolkit>
            <Iptoolkit></Iptoolkit>
            <Iptoolkit></Iptoolkit>
        </div>
        <div id="ld">
            <!-- lists -->
            <List1></List1>
            <List1></List1>
        </div>
        <div id="bt">
            <!-- button -->
            <bt style="color: darkblue;"></bt>
        </div>
    </div>
</template>
<style>
    #ld {
        width: 100%;
    }
    #tk {
        display: flex; 
        flex-wrap: none;
        width: 100%;
        overflow-x: scroll;
        background-color: rgba(32, 32, 32, 0.05);
        height: max-content;
        margin-top: 20vh;
        border-radius: 15px;
    }
    #tk div {
        margin: 5px 5px 5px 5px;
        color: darkblue;
        background: linear-gradient(180deg, #f0f8ff,#97dbf6);
        border: 2px solid darkblue;
        border-radius: 15px;
        height: 30vh;
        min-width: 30vh;
        overflow-y: auto;
    }
    #s {
        margin: 1vh 1vi;
    }
    #s #d {
        margin: 25vh auto 20vh auto;
    }
    #index_main {
        margin: auto;
        width: 80vi;
        max-width: 960px;
    }
    body {
        background: linear-gradient(180deg, #f0f8ff,#97dbf6);
        background-attachment: fixed;
    }
</style>