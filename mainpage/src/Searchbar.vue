<template>
    <div id="d">
        <form id="searchForm" method="GET" target="_blank" action="https://www.google.hk/search" >
            <div id="d1">
                <input type="text" id="searchQuery" name='q' v-model="searchQuery" placeholder="What are you searching for?">
            </div>
            <div id="d2">
                <div style="width: 100%;" />
                <button @click="toggleSearchEngine" id="switch" type="button">Switch</button>
                <button @click="search" id="go" type="submit">{{searchEngine}}</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '', // 存储搜索关键字
      searchEngine: 'Google' // 当前搜索引擎，默认为 Google
    };
  },
  methods: {
    search() {
      // 执行搜索操作，这里只是简单的打印搜索关键字和当前搜索引擎
      if (this.searchEngine === 'Google') {
        searchForm.action = "https://www.google.hk/search";
      } else {
        searchForm.action = "https://www.bing.com/search";
      }
      console.log(`Searching "${this.searchQuery}" on ${this.searchEngine}`);
    },
    toggleSearchEngine() {
      if (this.searchEngine === 'Google') {
        this.searchEngine = 'Bing';
      } else {
        this.searchEngine = 'Google';
      }
    }
  }
};
</script>

<style>
#d {
    padding-top: 5px;
    margin: auto;
    width: 100%;
}
#d1 {
    margin: auto;
}
#d1 input {
  display: block;
    color: darkblue;
    background-color: aliceblue;
    padding: 2px 10px;
    font-size: 3vh;
    margin: auto auto;
    width: 90%;
    height: 6vh;
    border-radius: 10px;
    border: 2px solid darkblue;
}
#d2{
    width: 100%;
    display: flex;
}
#d2 button {
    right: 0;
    display: block;
    height: 5vh;
    font-size: 3vh;
    background-color: transparent;
    border: 0px;
    border-bottom: 2px solid darkblue;
    margin: 10px;
    width: 125px;
    color: darkblue;
}
#d2 button:hover {
    color: rgb(15, 115, 114);
    border-color: rgb(15, 115, 114);
}
</style>
