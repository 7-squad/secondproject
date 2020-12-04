 <!-- 发布表彰 -->
<template>
    <div class="main_container">
       
          <Lcinput/>
          <Commendbutton />
          <br>
          <Commendation :tableData="fetchtableData"/>
    </div>
</template>

<script>
export default {
  data(){
    return{
      fetchtableData:[]
    }
  },
  async fetch() {
    this.fetchtableData = await fetch("/api/commendation").then((res) => res.json());
    console.log(this.fetchtableData);
    }
}
</script>

<style lang="less" scoped>
.main_container{
    margin: 0 25px;
}
</style>
