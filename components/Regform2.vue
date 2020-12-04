<template>
  <div class="reg-box">
    <el-form ref="regForm" :model="regForm" :rules="rules" label-width="100px">
      <el-form-item label="手机号码:" prop="tel">
        <el-input v-model.number="regForm.tel"></el-input>
      </el-form-item>

      <el-form-item label="登录密码:" prop="password">
        <el-input  type="password" v-model="regForm.password" placeholder=""></el-input>
      </el-form-item>
      
      <el-form-item label="重复密码:" prop="checkPass">
        <el-input  type="password" v-model="regForm.checkPass" placeholder=""></el-input>
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
export default {
  data() {
    var checkTel = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("手机号不能为空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数字值"));
        } else {
          if (value < 10000000000 || value > 19999999999) {
            callback(new Error("必须11位数"));
          } else {
            callback();
          }
        }
      }, 1000);
    };
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
        tel: "",
        password: "",
        checkPass: "",
      },
      rules: {
        password: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        tel: [{ validator: checkTel, trigger: "blur" }],
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