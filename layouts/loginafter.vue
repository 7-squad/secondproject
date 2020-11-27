<template>
  <div>
    <Header />
    <el-row>
      <el-col :span="4">
        <Navbar />
      </el-col>
      <Nuxt />
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