<template>
  <div >
    <el-steps direction="vertical" class="list">
      <el-step title="填写学生基本信息" >
        <template #description>
          <br>
          <Stubeforeinput />
        </template>
      </el-step>

      <el-step title="上传身份证明材料">
        <template #description>
          <br>
          <Uploadbefore />
        </template>
      </el-step>
      <el-step title="上传贫困证明材料">
        <template #description>
          <br>
          <Uploadbeforepk />
        </template>
      </el-step>
      <el-step title="上传体检证明材料">

        <template #description>
          <br>
          <Uploadbeforepk />

          <div class="bottom">
<el-button type="primary">提交信息</el-button>
<el-button type="primary">重置信息</el-button>
</div>
        </template>
      </el-step>
    </el-steps>
  </div>
</template>
<style scoped>
.list {
  /* background: blanchedalmond; */
  margin: 10px;
  padding-left: 20px;
  font-weight: bold;
 
}

.input {
  margin-left: 50px !important;
}


.el-button{
    padding: 10px;
}
  .el-button--primary{
          background-color: #007aa3;
    border-color: #007aa3;
    border-radius: 25px;
    width: 130px;
    /* margin-top: 50px; */
  }
  .bottom{
      border-top:1px solid#c0c0c0;
      margin-top: 30px;
      margin-bottom: 30px;
  }

  .bottom .el-button--primary{
      margin: 20px;
  }
/* .el-step{
    height: 500px;
} */
</style>