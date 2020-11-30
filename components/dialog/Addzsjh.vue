<template>
<div>
    <el-col >
          <el-button icon="el-icon-plus" size="mini" id="plusIcon"
          @click="dialogFormVisible = true"></el-button>
        </el-col>

        <el-dialog title="新增招生计划" :visible.sync="dialogFormVisible">
            <!-- 计划名称 -->
  <el-form :model="form">
    <el-form-item label="计划名称：" 
    :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off"  placeholder="请输入招生计划名称"></el-input>
    </el-form-item>

    <!-- 招生类型 -->
    <el-form-item label="招生类型：">
 <el-radio v-model="radio" label="1">高考类计划</el-radio>
  <el-radio v-model="radio" label="2">广东省自主招生计划</el-radio>
    </el-form-item>

<!-- 招生年份 -->
   <el-form :inline="true" :model="formInline" class="demo-form-inline">
  <el-form-item label="招生年份">
    <el-select v-model="formInline.year" placeholder="2018">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="招生省份">
    <el-select v-model="formInline.region" placeholder="广东省">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item>
</el-form>
<!-- 报名时间 -->
  <div class="block">
    <span class="demonstration">报名时间:</span>
    <el-date-picker
    class="rq"
     placeholder="选择日期"
      v-model="value1"
      type="date"
     >
    </el-date-picker>   至
    <el-date-picker
    class="rq"
     placeholder="选择日期"
      v-model="value2"
      type="date"
     >
    </el-date-picker>
  </div>
  <br>
 <!-- 表格 -->
<Test />

  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
  </div>
</el-dialog>
</div>
</template>

<script>
  export default {
    data() {
      return {
           radio: '1',
        dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          name: '',
        },
        formLabelWidth: '120px',
         formInline: {
          year: '',
          region: '',
          
        },
        value1:"",
        value2:"",
      };
    }
  };
</script>

<style lang="less" scoped>
.block  .el-input__prefix{
    color: darkgrey !important;
}
</style>