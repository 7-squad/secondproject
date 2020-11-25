<template>
  <div class="formbox">
    <p class="logotit">精准招生辅助系统</p>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="用户名:">
          <el-input v-model="form.name" placeholder="请输入用户名"></el-input>
        </el-form-item>

        <el-form-item label="密 码:">
          <el-input v-model="form.name" placeholder="请输入密码"></el-input>
        </el-form-item>

        <el-form-item label="验证码:">
          <el-input v-model="form.name"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="onSubmit">登&nbsp;&nbsp;录</el-button>
        </el-form-item>

        <div class="botbox">
          <a href="reg">注册账号</a>
          <i>|</i>
          <a href="#">忘记密码</a>
        </div>
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

<style lang="less">
// 大盒子 精准招生辅助系统
.formbox {
  top: -50px;
  right: 10px;
  position: absolute;
  border-radius: 6px;
  padding: 20px;
  width: 550px;
  height: 420px;
  background-color: #fff;
}
.logotit {
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #d2d2d2;
  line-height: 40px;
  font-size: 28px;
  color: #505050;
  text-align: center;
}
// 内框
.el-form{
  margin: 10px auto;
  width: 420px;
  height: 326px;
}
.el-form-item__label {
  text-align: center;
  font-size: 18px;
  
}
.el-input__inner {
  // ?
  outline: none;
  width: 330px;
  height: 40px;
  border: 1px solid #edeeee;
  padding-left: 8px;
  font-size: 14px;
}
// 登录按钮
.el-button--primary{
  position: absolute;
  left: -80px;
  width: 410px;
  height: 50px;
  background-color: #80201c;
  color: #fff;
  font-size: 18px;
}
.el-button--primary:hover{
  background-color: #800f0b;
}
.botbox{
  width: 100%;
  height: 40px;
  text-align: center;
  line-height: 40px;
  margin-top: 60px;
}
.botbox a{
  display: inline-block;
  font-size: 18px;
  color: #505050;
}
.botbox  i{
  padding: 0 10px;
}
</style>