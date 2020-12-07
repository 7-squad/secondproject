<template>
  <div>
    <el-col>
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


import enrollnewstu from "~/pages/enrollnewstu.vue";

let defaultTab = {
  title: "我的桌面",
  index: "myDesktop",
  components: enrollnewstu,
};

export default {
  layout: "loginafter",
  components: {
  enrollnewstu
  },
  data() {
    return {
  
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


<style lang="less" scoped>
.el-tabs, .el-tabs--card, .el-tabs--top{
    background-color: #fff;
}


</style>
<style>
.el-table th.gutter{
   display: table-cell!important;
 }
 
</style>
