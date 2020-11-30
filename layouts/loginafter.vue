<template>
  <div class="main">
    <Header />
    <el-row :gutter="10">
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
<style lang="less">
.main{
min-width: 1350px;
background-color: #ecf0f1;
}

</style>