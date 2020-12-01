<!-- 模板上传设置 -->
<template>

      <div  class="main_container">
        <el-row>
            <el-col :span="1"><Plusicon /></el-col>
            <el-col :span="1"><Modifyicon /></el-col>
            <el-col :span="1"><Deletebutton /></el-col>
            <br>
            <el-col ><Template /></el-col>
        </el-row>
    </div>
</template>
<style lang="less" scoped>
.main_container{
    margin: 0 25px;
}
</style>