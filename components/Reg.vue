<template>
<div class="reg-box">
     <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="手机号码:">
          <el-input v-model="form.name" placeholder=""></el-input>
        </el-form-item>

        <el-form-item label="验    证    码:">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
 <el-checkbox v-model="checked">我已充分阅读并同意此注册协议</el-checkbox>
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
.reg-box{
  margin: 0 auto;
  margin: 250px;
}
.el-form{
  margin: 10px auto;
  width: 420px;
  height: 326px;
}
.el-button--primary{
 
 border-radius: 25px;
 width: 189px;
 margin: 50px;
}
.el-input__inner{
  width: 50%;
}
.el-checkbox:last-of-type{
  margin-left: 50px;
}


</style>