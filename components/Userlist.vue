<template>
    <div style="height: 800px;" >
  <el-steps direction="vertical"  class="list">
     
    <el-step title="填写学生基本信息" icon="el-icon-warning" 
     >

     <el-form :inline="true"  size="small" class="demo-form-inline">
  <el-form-item label="账号：">
    <el-input placeholder="请输入账号"  style="width:130px"></el-input>
  </el-form-item>
  <el-form-item label="姓名：">
    <el-input placeholder="请输入姓名" style="width:130px"></el-input>
    
  </el-form-item>
   <el-form-item label="手机号码：">
    <el-input  placeholder="请输入手机号码" style="width:130px"></el-input>
  </el-form-item>
 
   
</el-form>s
    </el-step>




    <el-step title="上传身份证明材料"></el-step>
    <el-step title="上传贫困证明材料"></el-step>
    <el-step title="上传体检证明材料"></el-step>
  </el-steps>

</div>
</template>
<style scoped>
.list{
background: blanchedalmond;
 margin: 10px;
 padding-left: 20px;
font-weight: bold;

 
}
div{
    display: flex;
}
.input{
    margin-left: 50px;
}


</style>