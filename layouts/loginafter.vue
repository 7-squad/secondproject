<template>
  <div class="main">
    <Header />
    <el-row :gutter="10" class="main-item" style="margin-right: 0px;">
      <el-col :span="4" class="navbar">
        <Navbar />
      </el-col>
      <el-col :span="20">
      <Nuxt />
      </el-col>
    </el-row>
    <Footer />
  </div>
</template>

<script>
export default {
  props: {
      compList:{
          type:Array,
          default: function () {
              return [];
          }
      }
  },
  methods: {
   
  },
};
</script>
<style lang="less" scoped>
.main{
min-width: 1350px;
background-color: #ecf0f1;
margin-right: 0px;
margin-left: 0px;
}
.main-item{

min-height: 521px;
}
</style>

