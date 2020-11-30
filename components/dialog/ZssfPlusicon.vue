<template>
<div>
         <el-col >
          <el-button  icon="el-icon-plus" size="mini" id="plusIcon"
           @click="dialogTableVisible = true"></el-button>
        </el-col>

        <el-dialog 
        :visible.sync="dialogTableVisible">
           <div slot="title" class="dialog-title">
   <img src="../../images/个人中心_03.png">
    <span class="title-text">招生专业设置</span>
    </div>
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
 <el-form-item label="招生类型">
    <el-select v-model="formInline.region" placeholder="请选择招生类型">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item>

  <el-form-item label="科目类型">
    <el-select v-model="formInline.region" placeholder="请选择科目类型">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  </el-form>
<el-form>
  <el-form-item label="招生专业:">
<el-checkbox-group v-model="checkList">
    <div class="zs">
    <el-checkbox label="建筑工程技术专业"></el-checkbox>
    <el-checkbox label="工程造价专业"></el-checkbox>
    </div>
    <div class="one">
    <el-checkbox label="建筑装饰工程技术专业"></el-checkbox>
     <el-checkbox label="园林工程技术专业"></el-checkbox>
    </div>
    <div class="two">
      <el-checkbox label="酒店管理专业"></el-checkbox>
       <el-checkbox label="物业管理专业"></el-checkbox>
    </div>
       <div class="three">
        <el-checkbox label="学前教育专业"></el-checkbox>
       </div>
     </el-checkbox-group>
  </el-form-item>
</el-form>
<div class="button">
 <el-button type="danger" id="qdtButton"> 确定 </el-button>
 <el-button type="danger" id="exportButton"> 导出 </el-button>
</div>
</el-dialog>

        </div>
</template>

<script>
  export default {
    data() {
      return {
           checkList: ['复选框 A'],
        formInline: {
          user: '',
          region: ''
        },
        dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px'
      };
    }
  };
</script>


<style lang="less">
#plusIcon{
     height: 38px;
      
}
.zs .el-checkbox{
margin-right: 57px;
}
.two .el-checkbox{
    margin-right: 85px;
}
.one,.two,.three{
margin-left: 70px;
}

.button{
    margin-left:200px;
}
#exportButton,#qdtButton{
  background-color: #7f201e;
  height: 38px;
  width: 88px;
  letter-spacing: 5px;

}

#qdtButton{
    background-color:#007aa3;
    border-color: #007aa3;
}
.el-dialog__header{
    background-color: #f0f5f8;
}
.el-dialog{
    width: 40%;
}
</style>