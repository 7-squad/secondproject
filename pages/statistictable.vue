<template>
  <div>
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