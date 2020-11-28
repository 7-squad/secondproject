<template>
  <div>
    <el-row>
      <el-col>
   <Roleinput/>
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
      <Righticon />
      </el-col>
      <el-col :span="1">
        <Stopicon />
      </el-col>
      <el-col :span="1">
        <Roleicon />
      </el-col>
    </el-row>
    <br>
    <el-row>
      <el-col>
        <RoleManagement />
      </el-col>
    </el-row>
  </div>
</template>