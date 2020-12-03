<template>
  <el-table
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    style="width: 100%"
    highlight-current-row
    @current-change="handleCurrentChange"
    @selection-change="handleSelectionChange"
    border
    stripe
    :header-cell-style="{
      'background-color': '#f0f5f8',
      'border-color': '#dedfe3',
    }"
    :cell-style="tableCellStyle"
  >
    <el-table-column type="selection" width="55" header-align="center">
    </el-table-column>
    <el-table-column type="index" width="55" header-align="center" label="序号">
    </el-table-column>
    <el-table-column
      prop="year"
      label="招生年度"
      align="center"
    ></el-table-column>
    <el-table-column
      prop="province"
      label="招生省份"
      align="center"
    ></el-table-column>
    <el-table-column
      prop="city"
      label="招生城市"
      align="center"
    ></el-table-column>
    <el-table-column
      prop="teacher"
      label="招生老师"
      align="center"
    ></el-table-column>
    <el-table-column label="创建时间" align="center">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
  </el-table>
</template>
<script>
export default {
   props:{
tableData: {
  type:Array,
  default(){
    return
  }
}
  },
  data() {
    return {
      // tableData: [
      //   {
      //     year: "2018",
      //     province: "广东省",
      //     city: "湛江",
      //     teacher: "王冰冰",
      //     data: "2017-12-24",
      //   },
      // ],
      multipleSelection: [],
    };
  },
  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleCurrentChange(val) {
      if (!val) return;
      console.log("handleCurrentChange: %O", val);
      this.selectRow = val;
      this.$emit("showDialog", val);
    },
    tableCellStyle() {
      return "border-color: #dedfe3;";
    },
    clearSelect() {
      // 清空鼠标点击的选择行
      this.$refs.multipleTable.setCurrentRow();
    },
  },
};
</script>

<style lang="less">
.el-table__row {
  cursor: pointer;
}
</style>