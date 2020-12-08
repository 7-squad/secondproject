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
      <Usermagdialog />
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
      <el-col>
        <Pagination />
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
    enter(doDelete){
      console.log("doDelete:%0",doDelete);

      this.$confim("确认要删除数据吗?","提示",{
        confirmButtonText:"确定",
        cancelButtonText:"取消",
        type:"warning",
      })

      .then(()=>{
        this.$store.commit("usermanage/setRemoveUsermanage",doDelete);
        this.$store.dispatch("usermanage/clearRemoveUsermanageItem",this);
      })
      .catch((error)=>{
        console.error(error);
        this.$message({
          type:"info",
          message:"已取消删除",
        });
      });
    },
    finishRemove(result){
      console.log("result:%0",result);
      if(result.result){
        this.$message({
          type:"success",
          message:result.message,
        });
      }else{
        this.$message({
          type:"error",
          message:result.message,
        });
      }
    setTimeout(()=>{
      this.$router.go(0);
    },1000);

    },
    doDelete(){
      console.log("multipleSelection: %O", this.$refs.usermag.multipleSelection);
      this.$store.dispatch("usermanage/clearRemoveUsermanageItem",{page:this, data:this.$refs.usermag.multipleSelection});
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