<template>
<el-form :inline="true" :model="formInline" size="small" class="demo-form-inline">
  <el-form-item label="所在地区：">
    <el-input v-model="formInline.user" placeholder="请输入所在地区名称"  ></el-input>
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