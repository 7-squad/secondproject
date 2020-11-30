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
    <el-table-column type="index" width="55" header-align="center" label="序号">
    </el-table-column>
    <el-table-column label="招生年度" align="center">
      <template slot-scope="scope">{{ scope.row.data }}</template>
    </el-table-column>
    <el-table-column
      prop="major"
      label="推荐专业"
      align="center"
      show-overflow-tooltip
    ></el-table-column>
    <el-table-column
      prop="name"
      label="学生姓名"
      align="center"
      show-overflow-tooltip
    ></el-table-column>
    <el-table-column
      prop="telphone"
      label="联系电话"
      align="center"
      show-overflow-tooltip
    ></el-table-column>
    <el-table-column
      prop="Idcard"
      label="身份证号码"
      align="center"
      show-overflow-tooltip
    ></el-table-column>
    <el-table-column
      prop="city"
      label="高考省份/城市"
      align="center"
      show-overflow-tooltip
    ></el-table-column>
    <el-table-column
      prop="PoorStudents"
      label="是否贫困生"
      align="center"
      show-overflow-tooltip
    ></el-table-column>
    <el-table-column
      prop="state"
      label="状态"
      align="center"
      show-overflow-tooltip
    ></el-table-column>

     <el-table-column label="操作" show-overflow-tooltip>
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">查看详情</el-button>
        
      </template>
    </el-table-column>
</el-table>

</template>

<script>
export default {
    data(){
        return{
            tableData:[{
                Idcard:"123456789876543210",
                city:"广东,广州",
                telphone:"13987684564",
                name: "姓名名",
                data:"2017年" ,
                major:"建筑工程技术管理",
                PoorStudents:"是",
                state:"审核不通过",
            }],
            multipleSelection:[],
        };
    },
    methods:{
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