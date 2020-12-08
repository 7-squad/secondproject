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
        <span class="title-text">新增用户管理者</span>
      </div>
      <el-form
        :rules="rules"
        ref="addform"
        :model="formInline"
        :inline="true"
        class="demo-form-inline"
      >
        <el-form-item label="账号:" prop="userId">
          <el-input
            v-model="formInline.userId"
            placeholder="请输入账号"
          ></el-input>
        </el-form-item>

        <el-form-item label="姓名:" prop="name">
          <el-input
            v-model="formInline.name"
            placeholder="请输入姓名"
          ></el-input>
        </el-form-item>
        <el-form-item label="手机号码:" prop="phonenum">
          <el-input
            v-model="formInline.phonenum"
            placeholder="请输入手机号码"
          ></el-input>
        </el-form-item>

        <el-form-item label="邮箱:" prop="email">
          <el-input
            v-model="formInline.email"
            placeholder="请输入邮箱"
          ></el-input>
        </el-form-item>

        <el-form-item label="出生日期:" prop="brith">
          <el-input
            v-model="formInline.brith"
            placeholder="请输入出生日期"
          ></el-input>
        </el-form-item>
        <el-form-item label="角色:" prop="role">
          <el-input
            v-model="formInline.role"
            placeholder="请输入角色"
          ></el-input>
        </el-form-item>
        <el-form-item label="用户类型:" prop="usertype">
          <el-input
            v-model="formInline.usertype"
            placeholder="请输入用户类型"
          ></el-input>
        </el-form-item>
        <el-form-item label="状态:" prop="state">
          <el-input
            v-model="formInline.state"
            placeholder="请输入状态"
          ></el-input>
        </el-form-item>
      </el-form>

      <div class="button">
        <el-button
          native-type="submit"
          type="danger"
          id="qdtButton"
          @click="submitForm('addform')"
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
      formInline: {
        userId: "",
        name: "",
        phonenum: "",
        email: "",
        brith: "",
        role: "",
        usertype: "",
        state: "",
      },
      rules: {
        userId: [
          { required: true, message: "请输入账号", trigger: "blur" },
          {
            min: 1,
            max: 15,
            message: "长度在 1 到 15 个字符",
            trigger: "blur",
          },
        ],
        name: [
            { required: true, message: "请输入姓名", trigger: "blur" }
            ],
        phonenum: [
          { required: true, message: "请输入正确的手机号码", trigger: "blur" },
        ],
        email: [
          { required: true, message: "请输入正确的邮箱格式", trigger: "blur" },
        ],
        brith: [
          { required: true, message: "请输入正确的出生日期", trigger: "blur" },
        ],
        role: [
          { required: true, message: "请输入正确的角色名称", trigger: "blur" },
        ],
        usertype: [
          { required: true, message: "请输入正确的用户类型", trigger: "blur" },
        ],
        state: [
          { required: true, message: "请输入正确的使用状态", trigger: "blur" },
        ],
      },
    };
  },
  methods:{
       async submitForm(addform) {
      this.$refs[addform].validate(async (valid) => {
        if (valid) {
          alert("验证成功");
          console.log(addform);
          console.log(this);
          let result = await 
          this.$http.post("/api/userManage", this.addform);
          // console.log(result);
          // 看下返回的类型
          result =result.json;
          result.result;
          result.message;
        } else {
          console.log("验证失败");
          return false;
        }
      });
    },
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