<template>
  <!-- 忘记密码 -->
  <div class="reg-box">
    <el-form ref="pwdForm" :model="pwdForm" :rules="rules" label-width="100px">
      <el-form-item label="用户账号:" prop="username">
        <el-input v-model="pwdForm.username"></el-input>
      </el-form-item>
      <el-form-item label="登录密码:" prop="password">
        <el-input
          type="password"
          v-model="pwdForm.password"
          placeholder=""
        ></el-input>
      </el-form-item>
      <el-form-item label="重复密码:" prop="checkPass">
        <el-input type="password" v-model="pwdForm.checkPass"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('pwdForm')"
          >确 定</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.pwdForm.checkPass !== "") {
          this.$refs.pwdForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.pwdForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      pwdForm: {
        username: "",
        password: "",
        checkPass: "",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 6,
            max: 20,
            message: "长度在 6 到 20 个字符",
            trigger: "blur",
          },
        ],
        password: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style lang="less" scoped>
.reg-box {
  margin: 0 auto;
  margin-top: 50px;
}
.el-form {
  margin: 10px auto;
  width: 320px;
  height: 326px;
}
// .el-form-item__label {
//   text-align-last: justify;
// }
// .el-form .el-input__inner {
//   outline: none;
// }
.el-button--primary {
  border-radius: 25px;
  width: 189px;
  margin: 10px -20px;
}
.el-button--primary {
  background-color: #007aa3;
  border-color: #007aa3;
  border-radius: 25px;
  width: 189px;
}
.el-button--primary:hover {
  background-color: #0593c2;
}
</style>