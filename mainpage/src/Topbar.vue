<script>
import Link1 from './topbar/Link1.vue';
import listmenu from './compos/listmenu.vue'

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
            sites: [
                {
                    u: 'index.html',
                    n: 'HOME',
                },
                {
                    u: 'learn.html',
                    n: 'LEARN',
                },
                {
                    u: 'more.html',
                    n: 'MORE',
                },
            ]
        };
    },
    components: { 
        Link1,
        listmenu,
    },
    methods: {
        rd(){ // reverse d
            this.d = !this.d;
            console.log('Value of d reversed. ');
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

    <listmenu id="listmenu" :d=d :sites=sites></listmenu>

</template>
<style>
    #listmenu {
        text-align: center; 
        width: 20%; 
        max-width: 199px;
        position: fixed; 
        right: 0; 
        top: 9vh;
    }
    #listmenu li {
        padding: 4px 0;
        font-size: 3.5vh;
        margin: 1px;
        background-color: rgba(12, 32, 129, 0.5);
        border-radius: 5px;
    }
    #listmenu li a{
        color: aliceblue;
    }
    #listmenu li a:hover{
        color: rgb(241, 255, 172);
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
</style>