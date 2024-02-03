<script>
export default {
    data() {
        return {
        }
    },
    props:
    {
        tafter: {
            // 一段文字，放在链接列表之前
            type: String,
            default: "notdefined"
        },
        tafterdisplay: {
            // 这段文字是否显示
            type: Boolean,
            default: true
        },
        tl1: {
            // 列表的标题
            type: String,
            default: "LIST1",
        },
        id1: {
            // 列表的ID值
            type: String,
            default: "#notdefined"
        },
        sites: {
            // 列表中，展示的网站
            type: Array,
            default: [
                {
                    u:'#notdefined',
                    n:'notdefined',
                    discribe: 'notdefined'
                },
                {
                    u:'#notdefined',
                    n:'notdefined',
                    discribe: 'notdefined'
                }
            ]
        },
    },
}
</script>
<template>
<div class="list1">
    <div>
        <h2>
            <a :href="id1" style="margin-right: 5px;">
                {{ tl1 }}
                <p style="display: inline; font-size: medium; font-weight: normal;">
                    {{ id1 }}
                </p>
            </a>
        </h2>
    </div>
    <p id="taf" v-show="tafterdisplay">{{ tafter }}</p>
    <ul>
        <li v-for="site in sites" style="display: flex;">
            <a :href="site.u" style="padding-left: 5px;">{{ site.n }}</a>
            <p style="display: inline;">{{ site.discribe }}</p>
        </li>
    </ul>
</div>
</template>
<style>
    .list1 {
        padding: 3px;
        margin-top: 10px;
        color: darkblue;
        width: 100%;
        border-radius: 15px;
        background-color: rgba(32, 32, 32, 0.05);
        padding-bottom: 15px;
    }
    .list1 h2 {
        border-bottom: 2px solid darkblue;
        width: 99%;
        text-align: left;
        margin-left: 1%;
    }
    .list1 h2 a {
        display: inline-block;
        width: 99%;
    }
    .list1 ul {
        width: 100%;
        list-style: none;
        text-align: left;
        user-select: none;
    }
    .list1 li {
        display: block;
        width: 100%;
        font-size: large;
        font-weight: bold;
        /* border: 2px solid darkblue; */
        border-radius: 5px;
        padding: 5px 0;
    }
    .list1 li a {
        top: 0;
        border-bottom: 1px dotted darkblue;
    }
    .list1 li p {
        margin: 0;
        top: 0;
        padding-left: 10px;
        color: rgb(26, 119, 190);
        font-weight: normal;
    }
    .list1 #taf {
        border-left: 1px solid darkblue;
        margin: 0 15px 5px; 
        padding-left: 5px;
    }
</style>