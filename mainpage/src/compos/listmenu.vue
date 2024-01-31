<!-- 点击menu按钮，打开一个下拉菜单。 -->
<script>
    export default {
        props: {
            sites: {
                n: {
                    type: String,
                    default: 'Name'
                },
                u: {
                    type: String,
                    default: '/'
                }
            },
            d: {
                type: Boolean,
                default: false
            }
        },
    }
</script>
<template>
    <ul v-show=d>
        <li v-for="site in sites"><a :href="site.u">{{site.n}}</a></li>
    </ul>
</template>
<style>
    ul {
        margin: 0;
        padding: 0;
        list-style-type: none;
    }
</style>