<template>
  <div>
    <el-row>
      <el-col :span="4">
        <Navbar @openCom="toOpenCom"/>
      </el-col>
      <el-col :span="20">
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
           <component :is="item.components"></component>
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import StudentManagement from "~/components/Table/StudentManagement.vue";
import UserManagement from "~/components/Table/UserManagement.vue";

let compList = [
  {
    name:"basicData",
    title:"基础数据管理",
    components:"StudentManagement"
  },
  {
    name:"recommendManage",
    title:"推荐管理",
    components:"UserManagement "

  }
]

export default {
  layout:"loginafter",
  components:{
StudentManagement,
UserManagement
      },
  data() {
    return {
      editableTabsValue:"1",
      editableTabs: [
        {
          title: "我的桌面",
          name: "myDesktop",
          components:"StudentManagement",
        },
      ],
      tabIndex:"1",
    };
  },
  methods: {
    toOpenCom(event){
for (let index = 0; index < compList.length; index++) {
  const element = compList[index];
  if (element.name === event.cName) {
    this.editableTabs.push({
   title:element.title,
   name:element.name,
   components:element.components,
    });
    return;
  }
}
    },
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
