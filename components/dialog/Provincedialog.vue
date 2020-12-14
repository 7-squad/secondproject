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
        <span class="title-text">新增招生省份</span>
      </div>
      <el-form
        :rules="rules"
        :inline="true"
        :model="form"
        class="demo-form-inline"
      >
        <el-form-item label="省份名称:">
          <el-input v-model="form.province" placeholder="请输入招生省份"></el-input>
        </el-form-item>

        <el-form-item label="状态:">
          <el-input
            v-model="form.state"
            placeholder="状态"
          ></el-input>
        </el-form-item>
      </el-form>

      <div class="button">
        <el-button
          type="danger"
          id="qdtButton"
          @click="onSubmit"
        >
          确定
        </el-button>
        <el-button
          type="danger"
          id="exportButton"
          @click="dialogFormVisible = false"
        >
          取消
        </el-button>
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
      form: {
        province: "",
        state: "",
      },
      rules: {
        province: [
          { required: true, message: "请输入正确省份", trigger: "blur" }],
        state: [
          { required: true, message: "请输入状态", trigger: "blur" },
        ],
      },
    };
  },

  methods: {
    onSubmit(event) {
      this.$store.dispatch("province/addProvinceList", {
        page: this,
        data: this.form,
      });
      this.dialogFormVisible=false
      this.$store.dispatch(
      "province/getProvinceList",
      this
    );
    },
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
  //650
}
.el-input__inner {
  padding: 0 8px;
}
.el-form {
  border-bottom: 1px solid #e2e2e2;
}
</style>