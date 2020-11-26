<template>
  <div>
    <el-row>
      <el-col :span="4">
        <Navbar />
      </el-col>
      <el-col :span="7">
        <el-tabs
          v-model="editableTabsValue"
          type="card"
          editable
          @edit="handleTabsEdit"
        >
          <el-tab-pane
            :key="item.name"
            v-for="item in editableTabs"
            :label="item.title"
            :name="item.name"
          >
            {{ item.content }}
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  // components:{

  //     },
  data() {
    return {
      editableTabsValue:"1",
      editableTabs: [
        {
          title: "我的桌面",
          name: "myDesktop",
          compon: "Tab 1 content",
        },
      ],
      tabIndex: 1,
    };
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
        let tabs = this.editableTabs;
        let activeName = this.editableTabsValue;
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
              }
            }
          });
        }

        this.editableTabsValue = activeName;
        this.editableTabs = tabs.filter((tab) => tab.name !== targetName);
      }
    },
  },
};
</script>
