<template>
    <el-form :inline="true" size="small" class="demo-form-inline" >
    <el-form-item label="招生年度" >
    <el-select  v-model="formInline.year" placeholder="2018" style="width:100px">
      <el-option label="2019" value="shanghai"></el-option>
      <el-option label="2020" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="专业名称">
    <el-select v-model="formInline.major" placeholder="请选择专业名称" style="width:140px">
      <el-option label="2019" value="shanghai"></el-option>
      <el-option label="2020" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="审核状态">
    <el-select v-model="formInline.state" placeholder="请选择状态" style="width:120px">
      <el-option label="待提交" value="shanghai"></el-option>
      <el-option label="待审核" value="beijing"></el-option>
    </el-select>
  </el-form-item>

   <el-form-item label="招生类型">
    <el-select v-model="formInline.type" placeholder="请选择类型" style="width:120px">
      <el-option label="待提交" value="shanghai"></el-option>
      <el-option label="待审核" value="beijing"></el-option>
    </el-select>
  </el-form-item>

  <el-form-item label="学生姓名：">
          <el-input v-model="formInline.name" placeholder="请输入姓名" ></el-input>
        </el-form-item>

         <el-form-item>
          <el-button
            type="primary"
           
            class="el-button el-button--default is-plain"
          >
            搜   索
          </el-button>
          <el-button
            type="primary"
           
            class="el-button el-button--default is-plain"
          >
            清 空
          </el-button>
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
.el-button--primary.is-plain {
  color: black;
  background: #fff;
  border-color: #cbd1d3;
}
</style>