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
    <el-table-column
      prop="Examine"
      label="审批人"
      align="center"
      show-overflow-tooltip
    ></el-table-column>

    <el-table-column
      prop="Examinedata"
      label="审批时间"
      align="center"
      show-overflow-tooltip
    ></el-table-column>
    <el-table-column
      prop="Examineidea"
      label="审批意见"
      align="center"
      show-overflow-tooltip
      min-width="200px"
    ></el-table-column>
    <el-table-column
      prop="Examineend"
      label="审批结果"
      align="center"
      show-overflow-tooltip
    ></el-table-column>
    </el-table>
</template>

<script>
export default {
    data(){
        return{
            tableData:[{
                Examine:"王老师",
                Examinedata:"2018-06-28" ,
                Examineidea:"这里显示简要的审批意见这里显示简要的审批意见",
                Examineend:"审核通过",
            },
            
            ],
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