<template>
  <!-- 个人中心 -->
  <div class="personbox">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="用户账号:">
        <el-input v-model="formInline.user" placeholder=""></el-input>
      </el-form-item>

      <el-form-item label="手机号码:">
        <el-input v-model="formInline.tel" placeholder=""> </el-input>
      </el-form-item>

      <el-form-item label="姓名:">
        <el-input v-model="formInline.user" placeholder=""></el-input>
      </el-form-item>

      <el-form-item label="性别:">
        <el-radio v-model="radio" label="1">备选项</el-radio>
        <el-radio v-model="radio" label="2">备选项</el-radio>
      </el-form-item>
      <!-- <el-form-item>
    <el-button type="primary" @click="onSubmit">查询</el-button>
  </el-form-item> -->
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formInline: {
        user: "",
        region: "",
        radio: "1",
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
.personbox {
  margin-top: 20px;
  width: 732px;
  height: 252px;
}
.el-form-item {
  margin-bottom: 3px;
}
.el-input__inner {
  width: 200px;
  height: 32px;
  border-radius: 0;
}
.el-radio__input {
}
</style>