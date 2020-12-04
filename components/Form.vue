<template>
  <div class="formbox">
    <p class="logotit">精准招生辅助系统</p>
    <el-form
      ref="loginform"
      :model="loginform"
      :rules="rules"
      label-width="80px"
    >
      <el-input v-model="loginform.token" name="token" type="hidden"></el-input>

      <el-form-item label="用户名:" prop="username">
        <el-input
          v-model="loginform.username"
          placeholder="请输入用户名"
           
        ></el-input>
      </el-form-item>

      <el-form-item label="密码:" prop="password">
        <el-input
          type="password"
          v-model="loginform.password"
          placeholder="请输入密码"
         
        ></el-input>
      </el-form-item>
      <div class="yzm">
         <el-form-item label="验证码:" prop="sidentify">
        <el-input v-model="loginform.sidentify"></el-input>
     
        </el-form-item>
        <!-- 验证码组件 -->
       <div style="border: none" @click="refreshCode">
          <Identify :identifyCode="identifyCode"></Identify>
        </div>
      </div>
      <el-form-item>
        <!--  -->
        <el-button type="primary" @click="submitForm('loginform')"
          >登&nbsp;&nbsp;录</el-button
        >
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
import SIdentify from "@/components/Identify";
import postBody from "~/utils/postbody.js";

export default {
  data() {
    const sidentify = (rule, value, callback) => {
      let newVal = value.toLowerCase();
      let identifyStr = this.identifyCode.toLowerCase();
      if (newVal === "") {
        callback(new Error("请输入验证码"));
      } else if (newVal !== identifyStr) {
        console.log("sidentify:", value);
        callback(new Error("验证码不正确"));
      } else {
        callback();
      }
    };
    return {
      identifyCodes: "1234567890",
      identifyCode: "", //找回密码图形验证码
      result: {
        result: false,
      },
      loginform: {
        token:" ",
        username: null,
        password: null,
        sidentify: " ",
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
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 20,
            message: "长度在 6 到 20 个字符",
            trigger: "blur",
          },
        ],
        sidentify: {
          required: true,
          message: "请输入正确的验证码",
          trigger: "blur",
          validator: sidentify,
        },
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
   
     submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
 this.$store.dispatch("auth/doLogin", {
        data: this.loginform,
        page: this,
      });
      alert("登录成功");
      // this.$router.push({ path: "/home_center" });

        } else {
          console.log("登录失败");
          return false;
        }
      });
    },

    
 finishLogin() {
       
      if (!this.result.result) {
        this.$store.commit("auth/setMessage");
        return;
      } else {
        this.$store.commit("auth/setMessage");
      
      }
    },
    async refreshToken() {
      let result = await fetch("/api/user/login").then((res) => res.json());
      this.loginForm.token = result.token;
    },
   

 async fetch() {
    await this.refreshToken();
  },

    
    // 生成随机数
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    // 切换验证码
    refreshCode() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
    },
    // 生成四位数随机验证码
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[
          this.randomNum(0, this.identifyCodes.length)
        ];
      }
    },
  },


  mounted() {
    const self = this;
    self.identifyCode = "";
    self.makeCode(this.identifyCodes, 4);
  },
  created() {
    this.refreshCode();
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
.el-form {
  margin: 10px auto;
  width: 420px;
  height: 326px;
}
.el-form-item__label {
  // text-align: justify;
  text-align-last: justify;
  font-size: 18px;
  padding: 0;
}
.el-form .el-input__inner {
  // width: 330px;
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

.yzm {
  display: flex;
}
</style>