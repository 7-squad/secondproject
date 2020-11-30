<template>
<div class="dialog">
    <el-col >
          <el-button icon="el-icon-plus" size="mini" id="plusIcon"
          @click="dialogFormVisible = true"></el-button>
        </el-col>

        <el-dialog  :visible.sync="dialogFormVisible">
          <div slot="title" class="dialog-title">
  <img src="../../images/reg/tc.png">
    <span class="title-text">新增招生计划</span>
    </div>
            <!-- 计划名称 -->
  <el-form :model="form">
      
    <el-form-item label="计划名称：" 
    >
      <el-input v-model="form.name" autocomplete="off"  placeholder="请输入招生计划名称" style="width:500px"></el-input>
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
<Addtable />
<div style="margin: 20px 0;"></div>
<el-form-item label="备注说明">
<el-input
  type="textarea"
  placeholder="请简要填写备注内容"
  v-model="textarea"
  show-word-limit
>
</el-input>
</el-form-item>
  </el-form>
   <div class="button">
        <el-button type="danger" id="qdtButton" @click="dialogFormVisible = false"> 确定 </el-button>
        <el-button type="danger" id="exportButton" @click="dialogFormVisible = false"> 取消 </el-button>
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
       
         formInline: {
          year: '',
          region: '',
          
        },
        value1:"",
        value2:"",
         textarea: '',
      };
    }
  };
</script>

<style lang="less" scoped>

.block  .el-input__prefix{
    color: darkgrey !important;
}
.dialog .el-table{
height: 200px;
}

.title-text {
  color: #007aa3;
}
#exportButton,
#qdtButton {
  height: 38px;
  width: 88px;
  letter-spacing: 5px;
  background-color: #017e9e !important;
}
.el-button--danger {
  border-color: #007aa3;
}
.el-button {
 
  height: 35px !important;
  font-size: 15px;
  line-height: 12px;
  border-radius: 5px;
  
}
.button {
  margin-top: 20px;
  margin-left: 200px;
}
</style>