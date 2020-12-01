<template>
  <div>
    <el-col>
      <el-button
        icon="el-icon-plus"
        size="mini"
        id="plusIcon"
        @click="dialogTableVisible = true"
      ></el-button>
    </el-col>

    <el-dialog :visible.sync="dialogTableVisible">
      <div slot="title" class="dialog-title">
        <img src="../../images/reg/tc.png" />
        <span class="title-text">查看招生老师详细信息</span>
      </div>
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="审批结果 : 2018"> </el-form-item>
        <el-form-item label="招生省份 : 广东省"> </el-form-item>

        <el-form-item label="招生城市 : 茂名"> </el-form-item>
        <el-form-item label="招生老师 : 肖亚光"> </el-form-item>
        
        <el-form-item label="创建时间 : 2018-5-9"> </el-form-item>
      </el-form>
      

      <div class="button">
        <el-button type="danger" id="qdtButton"> 确定 </el-button>
        <el-button type="danger" id="exportButton"> 取消 </el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogTableVisible: false,
    };
  },
};
</script>


<style lang="less" scoped>
.title-text {
  color: #007aa3;
}
.el-dialog__body {
  padding: 20px 20px 10px 20px;
}
.el-dialog__header {
  background-color: #f0f5f8;
  padding: 10px 10px 10px;
  border-bottom: 1px solid #e2e2e2;
}
.el-form-item {
    margin-right: 150px;
    margin-bottom: 0px;
}

#exportButton,
#qdtButton {
  height: 38px;
  width: 88px;
  letter-spacing: 5px;
}
.el-button--danger {
  border-color: #007aa3;
}
.el-button {
  width: 85px !important;
  height: 35px !important;
  font-size: 15px;
  line-height: 12px;
  border-radius: 5px;
  background-color: #017e9e !important;
}
.button {
  margin-top: 20px;
  margin-left: 200px;
}
.el-dialog {
  width: 40%;
}
.el-input__inner {
  padding: 0 8px;
}
.el-form {
  border-bottom: 1px solid #e2e2e2;
}
</style>