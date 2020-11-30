<!-- 综合报表统计 -->
<template>

      <div  class="main_container">
    <el-row>
      <el-col>
         <Crsinput/>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="1">
       <Exporticon />
      </el-col>
    </el-row>
    <br>
    <el-row>
      <el-col>
        <Statistics />
      </el-col>
    </el-row>
  </div>
</template>
<style lang="less" scoped>
.main_container{
    margin: 0 25px;
}
</style>