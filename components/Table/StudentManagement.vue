<template>
  <el-table
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    style="width: 100%"
    @selection-change="handleSelectionChange"
  >
    <el-table-column type="selection" width="55"> </el-table-column>
    <el-table-column label="序号" >
      <template slot-scope="scope">{{ scope.row.id }}</template>
    </el-table-column>
    <el-table-column prop="name" label="姓名"></el-table-column>
    <el-table-column prop="recruit" label="招生类型" show-overflow-tooltip>
    </el-table-column>
    <el-table-column prop="school" label="所在学校" show-overflow-tooltip>
    </el-table-column>
    <el-table-column prop="Majorname" label="专业名称" show-overflow-tooltip>
    </el-table-column>
    <el-table-column label="分数段" >
      <template slot-scope="scope">{{ scope.row.fraction }}</template>
    </el-table-column>
    <el-table-column prop="address" label="所在地区" show-overflow-tooltip>
    </el-table-column>
    <el-table-column label="联系电话" width="120px">
      <template slot-scope="scope">{{ scope.row.telnumber }}</template>
    </el-table-column>
    <el-table-column prop="Poverty" label="是" show-overflow-tooltip>
    </el-table-column>
    <el-table-column prop="method" label="自荐" show-overflow-tooltip>
    </el-table-column>    
    <el-table-column label="日期" >
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column prop="state" label="状态" show-overflow-tooltip>
    </el-table-column> 

    
    
    
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          id: 1,
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
          id: 2,
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          id: 3,
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          id: 4,
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          id: 5,
          date: "2016-05-08",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          id: 6,
          date: "2016-05-06",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          id: 7,
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          id: 7,
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          id: 7,
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          id: 7,
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          id: 7,
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          id: 7,
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          id: 7,
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          id: 7,
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
    //   indexMethod(index) {
    //     return index++;
    //   },
  },
};
</script>