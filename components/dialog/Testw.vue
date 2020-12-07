<template>
  <el-dialog :visible.sync="dialogFormVisible.show">
    <div slot="title" class="dialog-title">
      <img src="../../images/reg/tc.png" />
      <span class="title-text">查看招生老师详细信息</span>
    </div>
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item label="审批结果 : 2018"> </el-form-item>
      <el-form-item label="招生省份 : 广东省"> </el-form-item>

      <el-form-item label="招生城市 : 湛江"> </el-form-item>
      <el-form-item label="招生老师 : 王冰冰"> </el-form-item>

      <el-form-item label="创建时间 : 2017-12-24"> </el-form-item>
    </el-form>

    <div class="button">
      <el-button
        type="danger"
        id="qdtButton"
        @click="closeDialog"
      >
        确定
      </el-button>
      <el-button
        type="danger"
        id="exportButton"
        @click="closeDialog"
      >
        取消
      </el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  props: {
    dialogFormVisible: {
      type: Object,
      default: function () {
        return {
          show:false,
        }
      },
    },
  },
  data() {
    return {
    };
  },
  methods:{
    closeDialog(){
      this.dialogFormVisible.show = false;
      // 组件抛出自定义事件 closeDialog
      this.$emit("closeDialog");
    }
  }
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