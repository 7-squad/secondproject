<template>
  <div class="reg-box">
    <el-form ref="regForm" :model="regForm" :rules="rules" label-width="100px">
      <el-input v-model="regForm.token" name="token" type="hidden"></el-input>
      <el-form-item label="用户名:" prop="username">
        <el-input v-model="regForm.username"></el-input>
      </el-form-item>

      <el-form-item label="登录密码:" prop="password">
        <el-input
          type="password"
          v-model="regForm.password"
          placeholder=""
        ></el-input>
      </el-form-item>

      <el-form-item label="重复密码:" prop="checkPass">
        <el-input
          type="password"
          v-model="regForm.checkPass"
          placeholder=""
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('regForm')"
          >完 成</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import postBody from "~/utils/postbody.js";
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.regForm.checkPass !== "") {
          this.$refs.regForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.regForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      regForm: {
        token: "",
        username: "",
        password: "",
        checkPass: "",
      },
      rules: {
        password: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 6,
            max: 20,
            message: "长度在 6 到 20 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$store.dispatch("auth/doSignin", {
            data: this.regForm,
            page: this,
          });
        } else {
          
          console.log("error submit!!");
          return false;
        }
      });
    },

    finishSignin(result) {
      if (result.result) {
        alert("注册成功");
        this.$router.push({ path: "/login" });

      }else{
alert("注册失败,"+result.message)
      }
    },

    // 获取登录令牌
    async refreshToken() {
      let result = await fetch("/api/user/signin").then((res) => res.json());
      console.log("result:%O", result);
      this.regForm.token = result.token;
    },

    // resetForm(formName) {
    //   this.$refs[formName].resetFields();
    // },
  },
  async fetch() {
    await this.refreshToken();
  },
};
</script>
<style lang="less" scoped>
.reg-box {
  margin: 0 auto;
  margin-top: 50px;
}
.el-form {
  margin: -10px auto;
  width: 320px;
  height: 326px;
}
// .el-form .el-input__inner {
//   outline: none;
// }
.el-button--primary {
  border-radius: 25px;
  width: 189px;
  margin: 10px -20px;
  background-color: #007aa3;
  border-color: #007aa3;
}
.el-button--primary:hover {
  background-color: #0593c2;
}
</style>