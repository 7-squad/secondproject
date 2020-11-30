<template>
  <el-table
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    style="width: 100%"
    @selection-change="handleSelectionChange"
    border
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
      label="招生年度"
      header-align="center"
    ></el-table-column>

    <el-table-column
      prop="recruit"
      header-align="center"
      label="推荐专业"
      show-overflow-tooltip
    >
    </el-table-column>

    <el-table-column
      prop="school"
      header-align="center"
      label="学生姓名"
      show-overflow-tooltip
    >
    </el-table-column>

     <el-table-column label="联系电话" width="120px" header-align="center">
      <template slot-scope="scope">{{ scope.row.telnumber }}</template>
    </el-table-column>>

 <el-table-column
    width="120"
      prop="Majorname"
      header-align="center"
      label="身份证号码"
      show-overflow-tooltip
    >
    </el-table-column>


    <el-table-column
    width="150"
      prop="address"
      header-align="center"
      label="高考省份/城市"
      show-overflow-tooltip
    >
    </el-table-column>



    <el-table-column prop="Poverty" label="是否贫困" header-align="center">
    </el-table-column>


    <el-table-column prop="state" header-align="center" label="状态">
    </el-table-column>
     <el-table-column prop="state" header-align="center" label="操作">
        <el-button type="text" size="small">查看详情</el-button>
    </el-table-column>
  </el-table>
</template>


<script>
export default {
  data() {
    return {
      tableData: [
        {
          name: "2017",
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