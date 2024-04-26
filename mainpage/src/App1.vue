<script>
import list1 from "../src/compos/list1.vue";
export default {
    components: {
        list1,
    },
    data() {
        return {
            l01: {
                tafter: "在此保存并公开分享一些软件工具和资料，可以根据需要取用。支持原创，建议选择原作者链接下载。原作者链接失效时，可以选择直接下载(Direct)。",
                tafterdisplay: true,
                tl1: "资源下载页",
                id1: "#main",
                sites: [
                    {
                        u: "mailto:gugugugugutian@outlook.com",
                        n: "联系作者",
                        discribe: "本页面以提供原作者网页的导航为主，同时也可能提供直接下载的链接。如果您希望下架直接下载链接，请联系我。",
                    },{
                        u: "mailto:gugugugugutian@outlook.com",
                        n: "Contact me",
                        discribe: "This website mainly serves for relocating for your original download link, however, a direct link might exist after it. Please contact me if you'd like to hide that direct link."
                    }
                ]
            }
        }
    },
}
</script>

<template>
    <div id="resources_main">
        <div id="ld">
            <list1 :listinfo="l01" id="main"></list1>
        </div>
    </div>
</template>

<style>
#resources_main {
    padding-top: 10vh;
    margin: auto;
    width: 80vi;
    max-width: 960px;
}

#ld {
    width: 100%;
}
</style>