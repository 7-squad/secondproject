<template>
<!-- 忘记密码 -->
  <div class="reg-box">
    <el-form ref="form" :model="form" label-width="100px">
      <el-form-item label="用户账号:">
        <el-input v-model="form.tel" placeholder=""></el-input>
      </el-form-item>
      <el-form-item label="登陆密码:">
        <el-input type="password" v-model="form.password" placeholder=""></el-input>
      </el-form-item>
      <el-form-item label="重复密码:">
        <el-input  type="password" v-model="form.password2" placeholder=""></el-input>
      </el-form-item>

      <el-form-item label="短信验证码:">
        <el-input v-model="form.verification"></el-input>
      </el-form-item>
      <button class="verification">获取短信验证码</button>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">确 定</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
        checked: true,
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
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
.el-form-item {
    margin-bottom: 10px;
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
.verification {
    outline: none;
    border: 1px solid #dcdfe6;
    color: #0576a4;
    width: 110px;
    height: 30px;
    margin: 0 120px;
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