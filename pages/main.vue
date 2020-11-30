<template>
  <div>
    <el-col :span="20" style="min-width=1350px">
      <el-tabs
        activate-name=""
        v-model="editableTabsValue"
        type="card"
        editable
        @edit="handleTabsEdit"
      >
        <el-tab-pane
          :key="item.index"
          v-for="item in editableTabs"
          :label="item.title"
          :name="item.index"
        >
          <component :is="item.components"></component>
        </el-tab-pane>
      </el-tabs>
    </el-col>
  </div>
</template>
<script>
import StudentManagement from "~/components/Table/StudentManagement.vue";
import UserManagement from "~/components/Table/UserManagement.vue";
import Teacher from "~/components/Table/Teacher.vue";

let defaultTab = {
  title: "我的桌面",
  index: "myDesktop",
  components: StudentManagement,
};

export default {
  layout: "loginafter",
  components: {
    StudentManagement,
    UserManagement,
  },
  data() {
    return {
      compList: [
        {
          name: "basicData",
          title: "基础数据管理",
          components: StudentManagement,
        },
        {
          name: "recommendManage",
          title: "推荐管理",
          components: UserManagement,
        },
        {
          name: "enrollNewStu",
          title: "招生计划设置",
          components: "Teacher",
        },
      ],
    
      tabIndex: "1",
    };
  },
  computed: {
    editableTabs: {
      get() {
        console.log(this);
        if (this.$store.state.global.pages.length === 0) {
          this.$store.commit("global/addPage", defaultTab);
        }
        return this.$store.state.global.pages;
      },
    },
    editableTabsValue: {
      get() {
        let currentPage = this.$store.state.global.currentPage;
        console.log("currentPage: %O", currentPage);
        return currentPage ? currentPage.index : null;
      },
      set(v) {
        console.log("v: %O", v);
        this.$store.commit("global/setCurrtentPage", v);
      },
    },
  },
  methods: {
    handleTabsEdit(targetName, action) {
      if (action === "add") {
        let newTabName = ++this.tabIndex + "";
        this.editableTabs.push({
          title: "New Tab",
          name: newTabName,
          content: "New Tab content",
        });
        this.editableTabsValue = newTabName;
      }
      if (action === "remove") {
        this.$store.commit("global/removePage", targetName)
      }
    },
  },
};
</script>

<style>
.el-table th.gutter{
   display: table-cell!important;
 }
 </style>
