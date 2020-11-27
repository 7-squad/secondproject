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
  <el-table-column label="编码" width="120px" header-align="center">
      <template slot-scope="scope">{{ scope.row.code }}</template>
    </el-table-column>
    <el-table-column prop="Rolename" label="角色名称" header-align="center">
    </el-table-column>
    <el-table-column prop="Founder" label="创建人" header-align="center">
    </el-table-column>
    <el-table-column label="创建日期"  header-align="center">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column prop="Modified" label="修改人" header-align="center">
    </el-table-column>
    <el-table-column label="修改日期"  header-align="center">
      <template slot-scope="scope">{{ scope.row.Modifieddate }}</template>
    </el-table-column>
    <el-table-column prop="state" header-align="center" label="状态">
    </el-table-column>

  </el-table>
</template>

<script>
export default {
    data(){
        return{
            tableData:[
                {
                code:"9008010008",
                Rolename:"专业审核老师",
                Founder:"后台管理员",
                date:"2018-5-6",
                Modified:"后台管理员",
                Modifieddate:"2018-5-6",
                state:"启用中",
                },
            ],
            multipleSelection:[],
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