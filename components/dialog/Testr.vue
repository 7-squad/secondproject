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
        <span class="title-text">新增招生老师</span>
      </div>
      <el-form
        :rules="rules"
        :inline="true"
        :model="form"
        class="demo-form-inline"
      >
        <el-form-item label="招生年度:">
          <el-input v-model="form.year" placeholder="请输入招生年度"></el-input>
        </el-form-item>

        <el-form-item label="招生省份:">
          <el-input
            v-model="form.province"
            placeholder="请输入招生省份"
          ></el-input>
        </el-form-item>
        <el-form-item label="招生城市:">
          <el-input v-model="form.city" placeholder="请输入招生城市"></el-input>
        </el-form-item>

        <el-form-item label="招生老师:">
          <el-input
            v-model="form.teachername"
            placeholder="请输入招生老师"
          ></el-input>
        </el-form-item>
      </el-form>

      <div class="button">
        <el-button
          native-type="submit"
          type="danger"
          id="qdtButton"
          @click="dialogFormVisible = false"
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
        year: "",
        province: "",
        city: "",
        teachername: "",
      },
      rules: {
        year: [{ required: true, message: "请输入正确年份", trigger: "blur" }],
        province: [
          { required: true, message: "请输入正确省份", trigger: "blur" },
        ],
        city: [{ required: true, message: "请输入正确城市", trigger: "blur" }],
        teachername: [
          { required: true, message: "请输入姓名", trigger: "blur" },
        ],
      },
    };
  },

  methods: {
    onSubmit(event) {
      this.$store.dispatch("teacher/addTeacher", {
        page: this,
        data: this.teacher,
      });
    },
    finishAddTeacher(result) {
      if (result.result) {
        this.$root.$bvToast.toast(`${result.message}`, {
          title: `添加成功`,
          toaster: "b-toaster-top-center",
          variant: "success",
        });
      } else {
        this.$root.$bvToast.toast(`${result.message}`, {
          title: `添加失败`,
          toaster: "b-toaster-top-center",
          variant: "danger",
        });
      }
      this.$store.dispatch("oaec/teacher/getTeacherList");
      this.$emit("goto-teacher-list");
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