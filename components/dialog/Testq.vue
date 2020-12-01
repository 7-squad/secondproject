<template>
  <div>
    <el-col>
      <el-button
        icon="el-icon-plus"
        size="mini"
        id="plusIcon"
        @click="dialogFormVisible = true"
      ></el-button>
    </el-col>

    <el-dialog :visible.sync="dialogFormVisible">
      <div slot="title" class="dialog-title">
        <img src="../../images/reg/tc.png" />
        <span class="title-text">学生资料审批</span>
      </div>
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="审批结果 :"
          ><el-radio-group v-model="radio">
            <el-radio :label="3">审核通过</el-radio>
            <el-radio :label="6">退回修改</el-radio>
            <el-radio :label="9">审核未通过</el-radio>
          </el-radio-group>
        </el-form-item>
        <br>
        <el-form-item label="审批意见 :"
          ><el-input
            type="textarea"
            :rows="4"
            placeholder="请简要输入您的审批意见"
            v-model="textarea"
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
      dialogTableVisible: false,
      dialogFormVisible: false,
      radio: 3,
      textarea:''
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
.el-textarea {
    width: 410px;
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