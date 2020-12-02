<template>
  <div class="formbox">
    <p class="logotit">精准招生辅助系统</p>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="用户名:" prop="username">
        <el-input v-model="form.name" placeholder="请输入用户名"></el-input>
      </el-form-item>

      <el-form-item label="密码:" prop="password">
        <el-input
          type="password"
          v-model="form.password"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>

      <el-form-item label="验证码:">
        <el-input v-model="form.verification"></el-input>
      </el-form-item>
      <div class="zs_yanz">
      <div style="border: none;"  @click="refreshCode">
        <Identify :identifyCode="identifyCode"></Identify>
      </div>
      </div>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">登&nbsp;&nbsp;录</el-button>
      </el-form-item>

      <div class="botbox">
        <a href="reg">注册账号</a>
        <i>|</i>
        <a href="fogpwd">忘记密码</a>
      </div>
    </el-form>
  </div>
</template>

<script>
import SIdentify from "@/components/identify";

export default {
  
  data() {
    const validateCode = (rule, value, callback) => {
      if (this.identifyCode !== value) {
        this.loginForm.code = "";
        this.refreshCode();
        callback(new Error("请输入正确的验证码"));
      } else {
        callback();
      }
    };
    return {
      identifyCodes: "1234567890",
      identifyCode: "", //找回密码图形验证码

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
      components: {
        "s-Identify": SIdentify,
      },
      watch: {
        identifyCode(v) {
          this.isDebugLogin && (this.loginForm.code = v);
        },
      },


    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },

    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min)
    },
    refreshCode() {
      this.identifyCode = ''
      this.makeCode(this.identifyCodes, 4)
    },
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[
          this.randomNum(0, this.identifyCodes.length)
          ]
      }
    }

  },
  mounted() {
    const self = this
    self.dphone = localStorage.user
    self.dpass = localStorage.password
    self.identifyCode = "";
    self.makeCode(this.identifyCodes, 4);
  },
  created() {
    this.refreshCode()
  }

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
.el-form {
  margin: 10px auto;
  width: 420px;
  height: 326px;
}
.el-form-item__label {
  // text-align: justify;
  text-align-last: justify;
  font-size: 18px;
}
.el-form .el-input__inner {
  width: 330px;
  height: 40px;
  border: 1px solid #edeeee;
  padding-left: 8px;
  font-size: 14px;
}
// 登录按钮
.el-button--primary {
  position: absolute;
  left: -80px;
  width: 410px;
  height: 50px;
  background-color: #80201c;
  color: #fff;
  font-size: 18px;
}
.el-button--primary:hover {
  background-color: #800f0b;
}
.botbox {
  width: 100%;
  height: 40px;
  text-align: center;
  line-height: 40px;
  margin-top: 60px;
}
.botbox a {
  text-decoration: none;
  display: inline-block;
  font-size: 18px;
  color: #505050;
}
.botbox i {
  padding: 0 10px;
}


  .zs_yanz{
    width: 342px;
    margin: 0 auto;
    margin-top: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
   
   
  }



</style>