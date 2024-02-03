<script>
export default {
    data() {
        return {
        }
    },
    props:
    {
        listinfo: {
            type: Array,
            default: {
                tafter: "undefined undefined undefined undefined undefined undefined undefined",
                tafterdisplay: true,
                tl1: "LIST1",
                id1: "#undefined",
                sites: [
                    {
                        u:"#undefined",
                        n:"undefined",
                        discribe:"undefined undefined undefined undefined undefined undefined",
                    },{
                        u:"#undefined",
                        n:"",
                        discribe:"undefined undefined undefined undefined undefined undefined",
                    },
                ]
            }
        }
    },
}
</script>
<template>
<div class="list1">
    <div>
        <h2>
            <a :href="listinfo.id1" style="margin-right: 5px;">
                {{ listinfo.tl1 }}
                <p style="display: inline; font-size: medium; font-weight: normal;">
                    {{ listinfo.id1 }}
                </p>
            </a>
        </h2>
    </div>
    <p id="taf" v-show="listinfo.tafterdisplay">{{ listinfo.tafter }}</p>
    <ul>
        <li v-for="site in listinfo.sites" style="display: flex;">
            <a :href="site.u" style="padding-left: 5px; min-width: 100px;">{{ site.n }}</a>
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
        width: 99%;
        text-align: left;
        margin-left: 1%;
        border-bottom: 2px solid darkblue;
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
        text-decoration: underline;
    }
    .list1 li p {
        margin: 0;
        top: 0;
        padding-left: 10px;
        color: rgb(26, 119, 190);
        font-weight: normal;
    }
    .list1 #taf {
        border-left: 1px solid rgb(26, 119, 190);
        color: rgb(26, 119, 190);
        margin: 0 15px 5px; 
        padding-left: 5px;
    }
</style>