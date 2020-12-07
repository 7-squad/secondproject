<template>
  <el-table
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    style="width: 100%"
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
      prop="name"
      label="计划名称"
      align="center"
      width="180"
    ></el-table-column>
    <el-table-column
      prop="type"
      label="招生类型"
      align="center"
    ></el-table-column>
    <el-table-column
      prop="year"
      label="招生年份"
      align="center"
    ></el-table-column>
    <el-table-column label="报名开始时间" align="center">
      <template slot-scope="scope">{{ scope.row.start_time }}</template>
    </el-table-column>
    <el-table-column label="报名结束时间" align="center">
      <template slot-scope="scope">{{ scope.row.end_time }}</template>
    </el-table-column>
    <el-table-column
      prop="remarks"
      label="备注"
      align="center"
      show-overflow-tooltip
    ></el-table-column>
    <el-table-column prop="state" label="状态" align="center"></el-table-column>
  </el-table>
</template>

<script>
export default {
  props: {
    tableData: {
      type: Array,
      default() {
        return;
      },
    },
  },
  data() {
    return {
      // tableData:[{
      //     planname:"2018年高考类招生计划",
      //     province:"高考类",
      //     startdata:"2017-12-24",
      //     enddata:"2017-12-24",
      //     year:"2018",
      //     remarks:"待修改，正在使用中",
      //     state:"启用中",
      // }],
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
    tableCellStyle() {
      return "border-color: #dedfe3;";
    },
  },
};
</script>