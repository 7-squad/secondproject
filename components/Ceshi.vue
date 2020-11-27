<template>
<div>
    <el-upload
  action="https://jsonplaceholder.typicode.com/posts/"
  list-type="picture"
   :show-file-list="false"
  :on-preview="handlePictureCardPreview"
  :on-remove="handleRemove"
   >

</el-upload>

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
    methods:
    {
      
       
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