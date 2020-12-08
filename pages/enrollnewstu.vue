<!-- 招生计划设置 -->
<template>
  <div class="main_container">
    <el-row>
      <el-col>
        <Souinout />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="1">
        <Addzsjh />
      </el-col>
      <el-col :span="1">
        <Modifyicon />
      </el-col>
      <el-col :span="2">
        <Deletebutton />
      </el-col>
      <el-col :span="1">
        <Righticon />
      </el-col>
      <el-col :span="1">
        <Stopicon />
      </el-col>
    </el-row>
    <br />
    <el-row>
      <el-col>
        <EnrollmentPlan :tableData="fetchtableData" />
      </el-col>
      <el-col>
        <Pagination />
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fetchtableData: []
    }
  },
  async fetch() {
    let result = await fetch("/api/stuplan").then((res) => {
      return res.json();
    });
    if (result.result) {
      this.fetchtableData = result.list;
      console.log(this.fetchtableData);
    }
  },
}
</script>

<style lang="less" scoped>
.main_container {
  margin: 0 25px;
}
</style>