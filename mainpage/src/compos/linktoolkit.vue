<style>
    .t002 {
        /* min-width: max-content; */
        overflow: hidden;
        overflow-wrap: break-word;
        /* user-select: none; */
        text-align: center;
        padding: 2px;
    }
</style>
<template>
    <div class="t002">
        <h2>{{ title }}</h2>
        <ul>
            <li v-for="site in sites"><a href="{{site.u}}">{{ site.n }}</a></li>
        </ul>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                sites: {
                    type: Array,
                    n: {
                        type: String
                    },
                    u: {
                        type: String
                    }
                },
                title: "list"
            }
        }
    }
</script>