<!-- 学生管理 -->
<template>
  <div class="main_container">
    <el-row @select="clickMenu">
      <el-col>
        <Stuinput />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="1">
        <Deleteicon />
      </el-col>
      <el-col :span="1">
        <Exportbutton />
      </el-col>
    </el-row>
    <br />
    <el-row>
      <el-col>
        <StudentManagement
          ref="student"
          @stuInformation="stuInformationHandler"
        />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import studentiformation from "~/pages/studentinformation.vue";
let openPanel = {
  index: "studentInformation",
  title: "学生信息详情",
  components: studentiformation,
};
export default {
  computed: {
    studentiformation,
  },
  data() {
    return {};
  },
  methods: {
    clickMenu(stuIndex) {
      console.log(stuIndex);

      for (let index = 0; index < this.items.length; index++) {
        const element = this.items[index];
        if (stuIndex === element.index) {
          this.$store.commit("global/addPage", element);
        }
      }
    },
    stuInformationHandler(val) {
      console.log(val);
      this.$store.commit("global/setStuInfo", val);
      this.$store.commit("global/addPage", openPanel);
    },
  },
};
</script>

<style lang="less" scoped>
.main_container {
  margin: 0 25px;
}
</style>