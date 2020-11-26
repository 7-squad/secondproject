<template>
    <el-row class="el-header-row">
    <el-col :span="4">
        <div class="grid-content bg-purple1">
            <img src="..\images\权限-角色管理_01.png" alt="">
        </div>
    </el-col>
    <el-col :span="16">
        <div class="grid-content bg-purple">
            <img src="..\images\权限-角色管理_06.png" alt="">
        </div>
    </el-col>
    <el-col :span="4">
        <div class="grid-content bg-purple bg-purple2">
            <el-button type="text" class="el-button-1"><img src="..\images\权限-角色管理_04.png" alt=""> 个人中心</el-button>
            <el-button type="text" class="el-button-1"><img src="..\images\权限-角色管理_02.png" alt=""> 安全退出</el-button>
            </div></el-col>
    </el-row>
</template>

<style>
  .el-header-row {
    min-width: 1350px;
    margin-bottom: 20px;
  }
  
  .bg-purple {
    padding: 20.5px;
    background: #007aa3;
  }
  .bg-purple2{
    padding-left: 0px;
    min-width: 225px;
    background: #007aa3;
  }
  .bg-purple1{
    min-width: 225px;
    padding: 10px;
    background: #005284;
  }
 
  .grid-content {
    min-height: 36px;
  }
  .el-button-1{
      padding: 8px;
      /* text-align: center; */
      color: white;
  }
</style>