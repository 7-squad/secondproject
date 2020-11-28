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
        <School />
      </el-col>
    </el-row>
  </div>
</template>