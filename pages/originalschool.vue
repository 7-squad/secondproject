<!-- 生源学校设置 -->
<template>

  <div  class="main_container">
    <el-row>
      <el-col>
        <Souinout />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="1">
        <Plusicon />
      </el-col>
      <el-col :span="1">
        <Modifyicon />
      </el-col>
      <el-col :span="2">
        <Deletebutton />
      </el-col>
      <el-col :span="1">
        <Importicon />
      </el-col>
      <el-col :span="1">
        <Exporticon />
      </el-col>
    </el-row>
    <br />
    <el-row>
      <el-col>
        <School :tableData="fetchtableData"/>
      </el-col>
    </el-row>
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
    this.fetchtableData = await fetch("/api/school").then((res) => res.json());
    console.log(this.fetchtableData);
    }
}
</script>

<style lang="less" scoped>
.main_container{
    margin: 0 25px;
}
</style>