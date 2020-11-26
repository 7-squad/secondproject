<template>
<el-form :inline="true" :model="formInline" size="small" class="demo-form-inline">
  <el-form-item label="推荐人：">
    <el-input v-model="formInline.user" placeholder="审批人" style="width:150px"></el-input>
  </el-form-item>
   <el-form-item label="手机号码：">
    <el-input v-model="formInline.name" placeholder="请输入手机号码" style="width:150px"></el-input>
  </el-form-item>
   <el-form-item label="推荐人范围：">
    <el-input v-model="formInline.scopeone" placeholder="请输入" style="width:100px"></el-input>--
    <el-input v-model="formInline.scopetow" placeholder="请输入" style="width:100px"></el-input>
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
          user: '',
          name: '',
          scopeone:"",
          scopetow:""

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