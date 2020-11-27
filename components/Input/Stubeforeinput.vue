<template>
    <el-form :inline="true" size="small" class="demo-form-inline" >
     <el-form-item label="学生姓名：">
          <el-input v-model="formInline.name" placeholder="" ></el-input>
        </el-form-item>
        <el-form-item label="性别" >
        <el-radio v-model="radio1" label="1">男</el-radio>
  <el-radio v-model="radio1" label="2">女</el-radio>
        </el-form-item>
        <el-form-item label="联系电话：">
          <el-input v-model="formInline.name" placeholder="" ></el-input>
        </el-form-item>
        <el-form-item label="身份证号：">
          <el-input v-model="formInline.name" placeholder="" ></el-input>
        </el-form-item>
    
    <el-form-item label="学校名称：">
          <el-input v-model="formInline.name" placeholder="" ></el-input>
        </el-form-item>
    <el-form-item label="高考所在省份" >
    <el-select  v-model="formInline.year" placeholder="" style="width:150px">
      <el-option label="2019" value="shanghai"></el-option>
      <el-option label="2020" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="模拟考试成绩：">
          <el-input v-model="formInline.name" placeholder="" ></el-input>
        </el-form-item>

  <el-form-item label="推荐专业">
    <el-select v-model="formInline.major" placeholder="" style="width:150px">
      <el-option label="2019" value="shanghai"></el-option>
      <el-option label="2020" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <br>
    <el-form-item label="与推荐人关系：">
          <el-input v-model="formInline.name" placeholder="" ></el-input>
        </el-form-item>
           <el-form-item label="是否贫困生">
         <el-radio v-model="radio2" label="3">是</el-radio>
  <el-radio v-model="radio2" label="4">否</el-radio>
       </el-form-item>
        <br>
            <el-form-item label="从何处了解我校招生信息："></el-form-item>
       <br>
          <el-form-item label="">
         <el-radio  v-model="radio3" label="5">我校招生老师</el-radio>
  <el-radio v-model="radio3" label="6">我校网站</el-radio>
  <el-radio v-model="radio3" label="7">我校微信公众号</el-radio>
   <el-radio v-model="radio3" label="8">其他</el-radio>
       </el-form-item>
       <br>
 

   <el-form-item label="招生老师姓名">
    <el-select v-model="formInline.type" placeholder="" style="width:150px">
      <el-option label="待提交" value="shanghai"></el-option>
      <el-option label="待审核" value="beijing"></el-option>
    </el-select>
  </el-form-item>

 



</el-form>
</template>
<script>
  export default {
    data() {
      return {
          radio1:'1',
           radio2:'3',
            radio3:'5',
        formInline: {
          year: '',
          major: '',
           state: '',
            type: '',
             name: '',
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>

<style lang="less" scoped>
.el-button--primary.is-plain {
  color: black;
  background: #fff;
  border-color: #cbd1d3;
}
.demo-form-inline{
width: 1109px
}

.el-form--inline .el-form-item{
    margin-right: 30px;
}
.demo-form-inline .el-input{
    width: 150px !important;

}

.el-radio{
    margin-right: 15px;
}

</style>