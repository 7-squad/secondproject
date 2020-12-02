<!-- 招生省份设置 -->
<template>

  <div class="main_container">
    <el-row>
      <el-col >
        <Souinout />
      </el-col>
    </el-row>
    <el-row >
      <el-col :span="1">
        <ZssfPlusicon />
      </el-col>
      <el-col :span="1">
        <Modifyicon />
      </el-col>
      <el-col :span="1">
        <Deleteicon />
      </el-col>
      <el-col :span="1">
        <Stopicon />
      </el-col>
      <el-col :span="1">
        <Consulticon />
      </el-col>
    </el-row>
    <br>
    <el-row>
      <el-col>
        <Province />
      </el-col>
    </el-row>
  </div>
</template>
<style lang="less" scoped>
.main_container{
    margin: 0 25px;
    
}
</style>