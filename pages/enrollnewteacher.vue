<template>
  <div>
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
      <el-col :span="1">
        <Deletebutton />
      </el-col>
    </el-row>
    <br>
    <el-row>
      <el-col>
        <Teacher />
      </el-col>
    </el-row>
  </div>
</template>