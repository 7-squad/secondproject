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
    <el-table-column prop="rec" label="推荐人" align="center"></el-table-column>
    <el-table-column
      prop="tel_num"
      label="手机号码"
      align="center"
    ></el-table-column>
    <el-table-column label="推荐人数" align="center">
      <template slot-scope="scope">{{ scope.row.rec_num }}</template>
    </el-table-column>

    <el-table-column label="时间" align="center">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column
      prop="state"
      label="表彰状态"
      align="center"
    ></el-table-column>
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
      //     tableData:[{
      //         recommender:"王老师",
      //         telnumber:"13695240897",
      //         number:1,
      //         data:"2018" ,
      //         state:"未表彰",
      //     }],
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