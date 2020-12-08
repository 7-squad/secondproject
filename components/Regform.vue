<template>
  <div class="reg-box">
    <el-form ref="regform" :model="regform" :rules="rules" label-width="100px">
      <el-form-item label="手机号码:" prop="telephone">
        <el-input v-model="regform.telephone"></el-input>
      </el-form-item>

      <el-form-item label="验证码:">
        <el-input v-model="regform.verification"></el-input>
      </el-form-item>
      <el-checkbox v-model="regform.checked">我已充分阅读并同意此注册协议</el-checkbox>
      <el-form-item>
        <el-button type="primary" @click="submitForm('regform')" ><a href="reg2">下一步</a></el-button
        >
      </el-form-item>

      
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      regform: {
        telephone: "",
        checked: false,
      },
      rules: {
        telephone: [
          { required: true, message: "号码不能为空" },
        ],
        checked:{
          required: true
        }
      },
    };
    
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
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
  margin: 0 auto;
  width: 320px;
  height: 326px;
}
.el-input {
  width: 100%;
}
.el-form-item .el-form-item__label {
  text-align-last: justify;
}
.el-form-item__label {
  padding: 0;
}
.el-button {
  margin-left:-25px;
}
.el-button a{
  text-decoration: none;
  color: rgb(255, 255, 255);
}
.el-button--primary {
  background-color: #007aa3;
  border-color: #007aa3;
  border-radius: 25px;
  width: 189px;
  margin-top: 50px;
}

.el-checkbox:last-of-type {
  margin-left: 50px;
}
</style>