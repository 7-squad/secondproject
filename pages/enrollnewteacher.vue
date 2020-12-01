<!-- 招生老师设置 -->
<template>
  <div  class="main_container">
    <el-row>
      <el-col>
        <Souinout />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="1">
        <Testr />
      </el-col>
      <el-col :span="1">
        <Modifyicon />
      </el-col>
      <el-col :span="1">
        <Deletebutton />
      </el-col>
    </el-row>
    <br>
    <el-row>
      <el-col>
        <!-- ref="teacher" 对组件的引用，使用teacher作为名字 将组件记录到this.$refs -->
        <!--  @showDialog="showDialogHandler" 监听组件内部 使用 this.$emit("showDialog", val); 发出的实践  -->
        <!-- this.$emit 抛出自定义事件 -->
        <Teacher ref="teacher" @showDialog="showDialogHandler" />
      </el-col>
    </el-row>
    <!-- :dialogFormVisible="dialogFormVisible" 控制弹框显示的对象  -->
    <!-- 不要直接使用 boolean， 要用 Object -->
    <!-- @closeDialog="closeDialog" 监听组件抛出的自定义事件 closeDialog -->
    <Testw :dialogFormVisible="dialogFormVisible" @closeDialog="closeDialogHandler" />
  </div>
</template>

<script>
export default {
  data(){
    return {
      dialogFormVisible:{
        show:false,
      },
    }
  },
  methods:{
    showDialogHandler(value){
      console.log("show: %O", value);
      this.dialogFormVisible.show = true;
    },
    closeDialogHandler(){
      console.log("close diglog");
      this.dialogFormVisible.show = false;
      // 通过引用调用组件内 methods 定义的方法 clearSelect
      this.$refs.teacher.clearSelect();
    }
  }
}
</script>

<style lang="less" scoped>
.main_container{
    margin: 0 25px;
}
</style>