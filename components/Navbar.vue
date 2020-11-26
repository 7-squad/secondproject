<template>
  <el-row class="tac">
    <el-col>
      <el-menu
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-submenu v-for="item in items" :key="item.index" :index="item.index">
          <template slot="title">
            <img :src="item.icon" alt="标志" />
            <span>{{ item.title }}</span>
          </template>

          <el-menu-item
            v-for="subItem in item.subs"
            :index="subItem.index"
            :key="subItem.index"
            >{{ subItem.title }}</el-menu-item
          >
        </el-submenu>

        <!-- <el-menu-item index="2">
          <img src="../images/navbar_2.png" alt="标志" />
          <span slot="title">推荐管理</span>
        </el-menu-item>
        <el-menu-item index="3">
          <img src="../images/navbar_3.png" alt="标志" />
          <span slot="title">表彰管理</span>
        </el-menu-item>
        <el-menu-item index="4">
          <img src="../images/navbar_4.png" alt="标志" />
          <span slot="title">统计分析</span>
        </el-menu-item>
        <el-menu-item index="5">
          <img src="../images/navbar_5.png" alt="标志" />
          <span slot="title">权限管理</span>
        </el-menu-item>
        <el-menu-item index="6">
          <img src="../images/navbar_6.png" alt="标志" />
          <span slot="title">系统管理</span>
        </el-menu-item> -->
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          icon: "/images/navbar_1.png",
          index: "basicData",
          title: "基础数据管理",
          subs: [
            {
              index: "enrollNewStu",
              title: "招生计划设置",
            },
            {
              index: "enrollNewTeacher",
              title: "招生老师设置",
            },
            {
              index: "originalSchool",
              title: "生源学校设置",
            },
            {
              index: "enrollNewProvince",
              title: "招生省份设置",
            },
            {
              index: "consultTeacher",
              title: "咨询专业老师设置",
            },
            {
              index: "mouldUpload",
              title: "模板资料上传设置",
            },
          ],
        },
        {
          icon: "/images/navbar_2.png",
          index: "recommendManage",
          title: "推荐管理",
          subs:[],
        },
        {
          icon: "/images/navbar_3.png",
          index: "commendManage",
          title: "表彰管理",
          subs:[],
        },
        {
          icon: "/images/navbar_4.png",
          index: "statisticAnalysis",
          title: "统计分析",
          subs:[],
        },
        {
          icon: "/images/navbar_5.png",
          index: "powerManage",
          title: "权限管理",
          subs:[],
        },
        {
          icon: "/images/navbar_6.png",
          index: "systemManage",
          title: "系统管理",
          subs:[],
        },
      ],
    };
  },

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
