<!-- 学生管理 -->
<template>

 <div  class="main_container">
    <el-row>
      <el-col>
         <Stuinput />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="1">
        <Deleteicon />
      </el-col>
      <el-col :span="1">
        <Exportbutton />
      </el-col>
    </el-row>
    <br>
    <el-row>
      <el-col>
        <StudentManagement />
      </el-col>
    </el-row>
  </div>
</template>
<style lang="less" scoped>
.main_container{
    margin: 0 25px;
}
</style>