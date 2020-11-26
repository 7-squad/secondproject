<template>
<el-form :inline="true" :model="formInline" size="small" class="demo-form-inline">
  <el-form-item label="招生年度：">
  <el-select v-model="formInline.region" placeholder="2018年春节招生" style="width:160px" >
      <el-option label="2019" value="shanghai"></el-option>
      <el-option label="2020" value="beijing"></el-option>
    </el-select>
  </el-form-item>
   
   <el-form-item>
          <el-button
            type="primary"
           
            class="el-button el-button--default is-plain"
          >
            搜   索
          </el-button>
         
        </el-form-item>
</el-form>
</template>

<script>
  export default {
    data() {
      return {
        formInline: {
          user: '',
          region: ''
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