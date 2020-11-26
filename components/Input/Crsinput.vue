<template>
    <el-form :inline="true" size="small" class="demo-form-inline" >
    <el-form-item label="" >
    <el-select v-model="formInline.data" placeholder="各中学注册报名数据" >
      <el-option label="2019" value="shanghai"></el-option>
      <el-option label="2020" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="">
    <el-select v-model="formInline.table" placeholder="表格" style="width:100px">
      <el-option label="2019" value="shanghai"></el-option>
      <el-option label="2020" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="省份：">
    <el-select  v-model="formInline.province" placeholder="请选择省份" style="width:150px">
      <el-option label="待提交" value="shanghai"></el-option>
      <el-option label="待审核" value="beijing"></el-option>
    </el-select>
  </el-form-item>

   <el-form-item  label="城市：">
    <el-select  v-model="formInline.city" placeholder="请选择城市" style="width:150px">
      <el-option label="待提交" value="shanghai"></el-option>
      <el-option label="待审核" value="beijing"></el-option>
    </el-select>
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
          data: '',
          table: '',
          province:"",
          city:"",
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
