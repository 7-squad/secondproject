<template>
    <el-form :inline="true" size="small" class="demo-form-inline" >
    <el-form-item label="招生年度:" >
    <el-select  v-model="formInline.year" placeholder="2017" style="width:100px">
      <el-option label="2019" value="shanghai"></el-option>
      <el-option label="2020" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="专业名称:">
    <el-select v-model="formInline.major" placeholder="建筑工程技术" style="width:100px">
      <el-option label="2019" value="shanghai"></el-option>
      <el-option label="2020" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="学生状态:">
    <el-select v-model="formInline.state" placeholder="选择学生状态" style="width:100px">
      <el-option label="待提交" value="shanghai"></el-option>
      <el-option label="待审核" value="beijing"></el-option>
    </el-select>
  </el-form-item>



  <el-form-item label="学生姓名：">
          <el-input v-model="formInline.name" placeholder=""  style="width:70px padding-buttom:0px"></el-input>
        </el-form-item>
 <el-form-item>
          <el-button type="primary" @click="onSubmit">搜    索</el-button>
        </el-form-item>
         <el-form-item>
          <el-button type="primary" @click="onSubmit">清   空  </el-button>
        </el-form-item>
</el-form>
</template>
<script>
  export default {
    data() {
      return {
        formInline: {
          year: '',
          major: '',
           state: '',
            type: '',
             name: '',
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>

<style lang="less" scoped>

.el-button--primary{
  border-radius: 25px;
  border-color: #007aa3;
  background-color: #007aa3;
}



</style>