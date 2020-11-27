<template>
  <el-row class="tac">
    <el-col>
      <el-menu
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        @select="clickMenu"
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
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
import StudentManagement from "~/components/Table/StudentManagement.vue";
import UserManagement from "~/components/Table/UserManagement.vue";
import Teacher from "~/components/Table/Teacher.vue";
import commend from "~/pages/commend.vue"

export default {
  components: {
    StudentManagement,
    UserManagement,
    commend
  },
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
              components: commend,
            },
            {
              index: "enrollNewTeacher",
              title: "招生老师设置",
              components: UserManagement,
            },
            {
              index: "originalSchool",
              title: "生源学校设置",
              components: StudentManagement,
            },
            {
              index: "enrollNewProvince",
              title: "招生省份设置",
              components: UserManagement,
            },
            {
              index: "consultTeacher",
              title: "咨询专业老师设置",
              components: StudentManagement,
            },
            {
              index: "mouldUpload",
              title: "模板资料上传设置",
              components: UserManagement,
            },
          ],
        },
        {
          icon: "/images/navbar_2.png",
          index: "recommendManage",
          title: "推荐管理",
          subs: [],
        },
        {
          icon: "/images/navbar_3.png",
          index: "commendManage",
          title: "表彰管理",
          subs: [],
        },
        {
          icon: "/images/navbar_4.png",
          index: "statisticAnalysis",
          title: "统计分析",
          subs: [],
        },
        {
          icon: "/images/navbar_5.png",
          index: "powerManage",
          title: "权限管理",
          subs: [],
        },
        {
          icon: "/images/navbar_6.png",
          index: "systemManage",
          title: "系统管理",
          subs: [],
        },
      ],
    };
  },

  methods: {
    clickMenu(menuIndex) {
      console.log(menuIndex );

      for (let index = 0; index < this.items.length; index++) {
        const element = this.items[index];
        if (menuIndex === element.index) {
          this.$store.commit("global/addPage", element);
        } else {
          if (element.subs.length > 0) {
            for (let index = 0; index < element.subs.length; index++) {
              const subElement = element.subs[index];
              if (menuIndex === subElement.index) {
                this.$store.commit("global/addPage", subElement);
              }
            }
          }
        }
      }

      // this.$store.globle.state.pages
      // console.log("clickMenu: %O", index);
      // this.$emit("openCom", { cName: index });
    },
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    },
  },
};
</script>
