<script>
import Link1 from './topbar/Link1.vue';

  export default {
    data() {
        return {
            t: "gugugugugutian",
            u: "#",
            tmail: "MAIL",
            umail: "#mail",
            tmenu: "MENU",
            umenu: "#menuopeninst",

            d: false, //display of listmenu
            
        };
    },
    props: {
        tsites: {
            type: Array,
            default: [
                {
                    u:'#',
                    n:'notdefined'
                }
            ]
        }
    },
    components: { 
        Link1,
    },
    methods: {
        rd(){ // reverse d
            this.d = !this.d;
            console.log('Value of d reversed to ' + this.d);
        }
    }
}
</script>
<template>
    <div id="top">
        <Link1 style="width: 70%;" :url="u" :content="t"></Link1>
        <Link1 style="width: 15%; text-align: center;" :url="umail" :content="tmail"></Link1>
        <Link1 style="width: 15%; text-align: center;" @click=rd :url="umenu" :content="tmenu"></Link1>
    </div>

    <!-- <listmenu id="listmenu" :d=d :sites=tsites></listmenu> -->
    <div id="listmenu">
        <ul v-show=d>
            <li v-for="site in tsites"><a :href="site.u">{{site.n}}</a></li>
        </ul>
    </div>
</template>
<style>
    #listmenu {
        text-align: center; 
        width: 20%; 
        position: fixed; 
        right: 0; 
        top: 9vh;

        max-height: 91vh;
        overflow-y: scroll;
    }
    #listmenu li {
        font-size: large;
        padding: 6px 0;
        font-size: 3.5vh;
        background-color: rgba(255, 255, 255, 0.7);
        border-radius: 5px;

    }
    #listmenu li a{
        color: darkblue;
    }
    #listmenu li a:hover{
        color: yellow;
    }
    #top {
        position: fixed;
        display: flex;
        width: 96%;
        background-color: #87ceeb;
        background: linear-gradient(0deg, #f0f8ff,#87ceeb);
        color: darkblue;
        height: 8vh;
        padding: 0 2%;
        margin-top: 0;
        padding-top: 10px;
        margin-right: 15px;
    }
    ul {
        margin: 0;
        padding: 0;
        list-style-type: none;
    }
    li {
        margin: 2px;
    }
</style>