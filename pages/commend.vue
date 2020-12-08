 <!-- 发布表彰 -->
<template>
  <div class="main_container">
    <Lcinput />
    <Commendbutton />
    <br />
    <Commendation :tableData="fetchtableData" />
    <Pagination />
  </div>
</template>

<script>
export default {
  data() {
    return {
      fetchtableData: [],
    };
  },
   async fetch() {
    let result = await fetch("/api/commendation").then((res) => {
      return res.json();
    });
    if (result.result) {
      this.fetchtableData = result.list;
      console.log(this.fetchtableData);
    }
  },
};
</script>

<style lang="less" scoped>
.main_container {
  margin: 0 25px;
}
</style>
