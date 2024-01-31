<script>
    import Searchbar from './Searchbar.vue';
    export default {
        components: {
            Searchbar
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
        </div>
    </div>
</template>
<style>
    #s {
        margin: 1vh 1vi;
    }
    #s #d {
        margin: 35vh auto 10vh auto;
    }
    #index_main {
        margin: auto;
        width: 80vi;
        max-width: 960px;
    }
</style>