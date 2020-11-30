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
      'border-color':'#dedfe3'
    }"
    :cell-style="tableCellStyle"
  >
    <el-table-column type="selection" width="55" header-align="center">
    </el-table-column>
    <el-table-column type="index" width="55" header-align="center" label="序号">
    </el-table-column>

    <el-table-column
      prop="name"
      label="姓名"
      header-align="center"
    ></el-table-column>

    <el-table-column
      prop="recruit"
      header-align="center"
      label="招生类型"
      show-overflow-tooltip
    >
    </el-table-column>

    <el-table-column
      prop="school"
      header-align="center"
      label="所在学校"
      show-overflow-tooltip
    >
    </el-table-column>

    <el-table-column
    width="120"
      prop="Majorname"
      header-align="center"
      label="专业名称"
      show-overflow-tooltip
    >
    </el-table-column>

    <el-table-column label="分数段" header-align="center">
      <template slot-scope="scope">{{ scope.row.fraction }}</template>
    </el-table-column>

    <el-table-column
    width="150"
      prop="address"
      header-align="center"
      label="所在地区"
      show-overflow-tooltip
    >
    </el-table-column>

    <el-table-column label="联系电话" width="120px" header-align="center" show-overflow-tooltip>
      <template slot-scope="scope">{{ scope.row.telnumber }}</template>
    </el-table-column>

    <el-table-column prop="Poverty" label="是否贫困" header-align="center">
    </el-table-column>

    <el-table-column prop="method" label="推荐方式" header-align="center">
    </el-table-column>

    <el-table-column label="日期" header-align="center" show-overflow-tooltip>
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>

    <el-table-column prop="state" header-align="center" label="状态">
    </el-table-column>
  </el-table>
</template>


<script>
export default {
  data() {
    return {
      tableData: [
        {
          name: "王小虎",
          recruit: "高考类",
          school: "英德中学",
          Majorname: "学前教育专业",
          fraction: "200~250",
          address: "上海市-普陀区金沙江路1518弄",
          telnumber: "13416586441",
          Poverty: "是",
          method: "自荐",
          date: "2018-06-15",
          state: "待提交",
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
      ],
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