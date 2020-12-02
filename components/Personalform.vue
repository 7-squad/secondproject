<template>
  <!-- 个人中心 -->
  <div class="personbox">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="用户账号:">
        <el-input v-model="formInline.user" placeholder=""></el-input>
      </el-form-item>

      <el-form-item class="r" label="手机号码:">
        <el-input v-model="formInline.tel" placeholder=""> </el-input>
      </el-form-item>

      <el-form-item label="姓名:">
        <el-input v-model="formInline.name" placeholder=""></el-input>
      </el-form-item>

      <el-form-item class="r w" label="性别:">
        <el-radio v-model="radio" label="1">男</el-radio>
        <el-radio v-model="radio" label="2">女</el-radio>
      </el-form-item>

      <el-form-item label="出生年月:">
        <el-date-picker v-model="value" type="date"> </el-date-picker>
      </el-form-item>

      <el-form-item class="longf" label="工作单位:">
        <el-input v-model="formInline.employer" placeholder=""></el-input>
      </el-form-item>

      <el-form-item class="longf" label="单位地址:">
        <el-input v-model="formInline.address" placeholder=""></el-input>
      </el-form-item>

      <el-form-item class="i">
        <el-form-item>
          <el-button type="primary" @click="onSubmit">保存</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="cancel">取消</el-button>
        </el-form-item>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio: "1",
      formInline: {},
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>

<style lang="less" >
.personbox {
  margin-top: 20px;
  width: 732px;
  height: 252px;
}
.el-form {
  margin-left: 50px;
}
.el-form-item {
  margin-bottom: 3px;
}
.el-form-item__label {
  width: 80px;
}
.el-input__inner {
  width: 200px;
  height: 32px;
  border-radius: 0;
}
.r {
  float: right;
}
.w {
  position: relative;
  right: 88px;
}
.el-form-item .el-form-item__label {
  text-align-last: justify;
}
.demonstration {
  font-size: 14px;
  color: #606266;
}
.longf .el-input__inner {
  width: 590px;
}
.i {
  margin-left: 185px;
}
.el-form-item__content .el-button--primary {
  background-color: #007aa3;
  border-color: #007aa3;
  border-radius: 25px;
  width: 92px;
  height: 34px;
  line-height: 9px;
  font-size: 14px;
  margin-top: 30px;
  margin-left: 40px;
}
.el-button--primary:hover {
  background-color: #0593c2;
}
</style>