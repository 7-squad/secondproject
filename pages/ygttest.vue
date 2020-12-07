<template>
  <el-form
    :model="loginForm"
    status-icon
    :rules="rules2"
    ref="ruleForm2"
    class="demo-ruleForm"
  >
    <el-form-item label="用户名" prop="username">
      <el-input v-model.number="loginForm.username"></el-input>
    </el-form-item>

    <el-form-item>
      <el-form-item label="密码" prop="passwordword">
        <el-input
          type="passwordwordword"
          v-model="loginForm.passwordword"
          auto-complete="off"
        ></el-input>
      </el-form-item>

      <el-form-item label="确认密码" prop="checkpasswordword">
        <el-input
          type="passwordwordword"
          v-model="loginForm.checkpasswordword"
          auto-complete="off"
        ></el-input>
      </el-form-item>

      <el-button type="primary" @click="submitForm('loginForm')"
        >登录</el-button
      >
    </el-form-item>
  </el-form>
</template>>
<script>
export default {
  data() {
    var checkUsername = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("用户名不能为空"));
      }
    };
    var validatepasswordword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.loginForm.checkpasswordword !== "") {
          this.$refs.loginForm.validateField("checkpasswordword");
        }
        callback();
      }
    };
    var validatepasswordword2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.loginForm.passwordword) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        username: "",
        passwordword: "",
        checkpasswordword: "",
      },
      rules2: {
        passwordword: [{ validator: validatepasswordword, trigger: "blur" }],
        checkpasswordword: [{ validator: validatepasswordword2, trigger: "blur" }],
        username: [{ validator: checkUsername, trigger: "blur" }],
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