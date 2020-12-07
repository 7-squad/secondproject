<!-- 用户管理 -->
<template>

  <div  class="main_container">
    <el-row>
      <el-col>
    <Userinput/>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="1">
        <Plusicon />
      </el-col>
      <el-col :span="1">
        <Modifyicon />
      </el-col>
      <el-col :span="2">
        <Deletebutton @do-delete="doDelete" />
      </el-col>
      <el-col :span="1">
      <Powericon />
      </el-col>
    </el-row>
    <br>
    <el-row>
      <el-col>
        <UserManagement ref="usermag" :tableData="fetchtableData"/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data(){
    return{
      fetchtableData:[]
    }
  },
  methods:{
    doDelete(){
      console.log("multipleSelection: %O", this.$refs.usermag.multipleSelection);
    }
  },
  async fetch() {
    this.fetchtableData = await fetch("/api/userManage").then((res) => res.json());
    console.log(this.fetchtableData);
    }
}
</script>

<style lang="less" scoped>
.main_container{
    margin: 0 25px;
}
</style>