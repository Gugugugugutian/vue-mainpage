<!-- 一个小程序，显示当前IP，以及一些归属地的信息 -->
<style>
    .t001 {
        /* min-width: max-content; */
        overflow-wrap: break-word;
        /* user-select: none; */
        text-align: center;
        padding: 2px;
    }
    .t001 button {
        border: 0;
        font-size: large;
        text-decoration: underline;
        background-color: transparent;
    }
    .t001 button:hover{
        color: yellow;
    }
</style>
<template>
    <div class="t001">
        <h1>{{ nation }}</h1>
        <h2>{{ ipv4 }}</h2>
        <p style="font-size: large;">{{ city }}, {{ state }}. <button @click="refreshIp">Refresh</button> </p>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                ipv4: "192.168.1.1",
                nation: "Undefined",
                state: "local",
                city: "local",
            }
        },
        mounted() {
        this.fetchIPData();
        },
        methods: {
            async fetchIPData() {
            try {
                // Fetch IP address
                const response = await fetch("https://api.ipify.org?format=json");
                const data = await response.json();
                this.ipv4 = data.ip;

                // Fetch location data
                const locationResponse = await fetch("https://ipapi.co/json/");
                const locationData = await locationResponse.json();
                this.nation = locationData.country_name;
                this.state = locationData.region;
                this.city = locationData.city;

                console.log("[Toolkit #001] Finished. Ip address: " + data.ip);
                } catch (error) {
                    console.log("[Toolkit #001] Error fetching data:", error);
                }
            },
            refreshIp() {
                this.nation = "Refreshing...";
                this.fetchIPData();
            }
        }
    }
</script>