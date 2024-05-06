<script>
export default {
  name: 'GridTable',
  props: {
    config: {
      type: Object,
      default: {
        isTable: false,
        tableLineSize: 3,
        tableSites: [],
        tableSize: 5,
      }
    }
  },
  mounted() {
    console.log("girdTableSites: ", this.config.tableSites);
  },
}
</script>

<template>
<div class="gridTable">
  <table style="width: 100%; table-layout: fixed">
    <tr v-for="(item, index) in config.tableSites" :key="index">
      <td class="webTable" v-for="(item2, index2) in item" :key="index2">
        <a class="gridTableItem" style="overflow: hidden; font-size: 16px" :href="item2.u">
          <b>{{item2.n}}</b>
        </a>
      </td>
    </tr>
  </table>
</div>
</template>

<style>
.gridTable {
  margin: 10px;
}
.gridTableItem {
  color: darkblue;
  border: 2px solid darkblue;
  border-radius: 15px;
  margin: auto 2px;
  height: 5vh;
  display: block;
  text-align: center;
}
.gridTableItem:hover {
  background-color: darkblue;
  color: white;
  border: 2px solid white;
}
</style>