<template>
  <div class="reg-box">
    <el-form ref="form" :model="form" label-width="100px">
      <el-form-item label="手机号码:">
        <el-input v-model="form.tel" placeholder=""></el-input>
      </el-form-item>
      <el-form-item label="登录密码:">
        <el-input v-model="form.password" placeholder=""></el-input>
      </el-form-item>
      <el-form-item label="重复密码:">
        <el-input v-model="form.password2" placeholder=""></el-input>
      </el-form-item>

      <el-form-item label="短信验证码:">
        <el-input v-model="form.verification"></el-input>
      </el-form-item>
      <button class="verification">获取短信验证码</button>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">下一步</el-button>
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
  width: 420px;
  height: 326px;
}
.el-form-item {
    margin-bottom: 10px;
}
// .el-form .el-input__inner {
//   outline: none;
// }
.el-button--primary {
  border-radius: 25px;
  width: 189px;
  margin: 10px 25px;
}
.verification {
    outline: none;
    border: 1px solid #dcdfe6;
    color: #0576a4;
    width: 110px;
    height: 30px;
    margin: 0 162px;
}
</style>