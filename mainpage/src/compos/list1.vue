<script>
export default {
    data() {
        return {
            tl1: "title",
        }
    },
    props:
    {
        sites: [ {u:"siteurl", n:"sitename"} ]
    }
}
</script>
<template>
<div>
    <h2>
        {{ tl1 }}
    </h2>
    <ul>
        <li v-for="site in sites"><a href="{{ site.u }}">{{ site.n }}</a></li>
    </ul>
</div>
</template>
<style>

</style>