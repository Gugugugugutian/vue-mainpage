<script>
export default {
    props: {
        datetime: {
            type: String,
            default: function() {
                const a = new Date().toLocaleString('en-US', { timeZone: 'Asia/Hong_Kong' });
                return a;
            }
        }
    }
}
</script>
<template>
<div class="btb">
    <h2>
        <a href="https://gugugugugutian.github.io">gugugugugutian.github.io</a>
    </h2>
    <p style="font-weight: bold;">
        by gugugugugutian, Version 3.0.240205 <br/>
        Loaded at {{ datetime }} <br/>
    </p>
    <p>
        本网站并没有在工信部备案。<br/>
        网站源代码完全公开，请见<a href="https://github.com/Gugugugugutian/vue-mainpage" style="text-decoration: underline;" >这个链接</a>。
        如有疑问或是建议，请联系<a href="mailto:gugugugugutian@outlook.com?subject=Mail%20from%20personal%20Github%20website(VUE)" style="text-decoration: underline;">作者邮箱</a>。<br/>
    </p>
    <p style="font-weight: bold; margin-top: 3vh;">
        Explore with an open mind<br/>
        怀着开放的心态去探索
    </p>
</div>
</template>
<style>
.btb {
    width: 100%;
    text-align: center;
    border-top: 1px solid #000;
    margin-top: 2%;
    user-select: none;
    margin-bottom: 4vh;
}
.btb p {
    margin: 2px;
}
.btb h2 {
    margin-bottom: 2%;
}
</style>