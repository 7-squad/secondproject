<template>
  <el-row class="tac">
    <el-col >
      <el-menu
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-submenu index="1">
          <template slot="title">
            <img src="../images/navbar_1.png" alt="标志">
            <span>基础数据管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">招生计划设置</el-menu-item>
            <el-menu-item index="1-2">招生老师设置</el-menu-item>
             <el-menu-item index="1-3">生源学校设置</el-menu-item>
             <el-menu-item index="1-4">招生省份设置</el-menu-item>
             <el-menu-item index="1-5">咨询专业老师设置</el-menu-item>
             <el-menu-item index="1-6">模板资料上传设置</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="2">
           <img src="../images/navbar_2.png" alt="标志">
          <span slot="title">推荐管理</span>
        </el-menu-item>
        <el-menu-item index="3">
          <img src="../images/navbar_3.png" alt="标志">
          <span slot="title">表彰管理</span>
        </el-menu-item>
        <el-menu-item index="4">
           <img src="../images/navbar_4.png" alt="标志">
          <span slot="title">统计分析</span>
        </el-menu-item>
        <el-menu-item index="5">
          <img src="../images/navbar_5.png" alt="标志">
          <span slot="title">权限管理</span>
        </el-menu-item>
        <el-menu-item index="6">
          <img src="../images/navbar_6.png" alt="标志">
          <span slot="title">系统管理</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
export default {
 
 
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
