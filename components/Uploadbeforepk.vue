<template>

    <div >
        <el-input placeholder=""  class="input-with-select">
    
    <el-button slot="append" >添加附件</el-button>
  </el-input>
  
     
        <el-button type="primary">上传</el-button>
        请上传清晰的身份证正反面，文件格式为jpg，不大于200k
    
      
        <el-upload
  action="../images/uploadbefore"
  list-type="picture-card"
  :on-preview="handlePictureCardPreview"
  :on-remove="handleRemove">
  <i class="el-icon-plus"></i>
 
</el-upload>
<el-dialog :visible.sync="dialogVisible">
  <img width="100%" :src="dialogImageUrl" alt="">
</el-dialog>


    </div>
</template>

<script>
  export default {
    data() {
      return {
        dialogImageUrl: '',
        dialogVisible: false
      };
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      }
    }
  }
</script>
<style scoped>
.input-with-select,.el-input__inner {
    width: 500px !important;
    margin-bottom: 20px !important;
  }

.el-button{
    padding: 5px;
}
  .el-button--primary{
          background-color: #007aa3;
    border-color: #007aa3;
    border-radius: 25px;
    width: 89px;
    /* margin-top: 50px; */
  }
  .bottom{
      border-top:1px solid#c0c0c0;
      margin-top: 30px;
      margin-bottom: 30px;
  }

  .bottom .el-button--primary{
      margin: 20px;
  }

  .el-button--primary {
  position: unset  !important;
  }
</style>