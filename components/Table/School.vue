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
      prop="province"
      label="省份"
      align="center"
    ></el-table-column>
    <el-table-column
      prop="city"
      label="城市"
      align="center"
    ></el-table-column>
    <el-table-column
      prop="region"
      label="所在地区"
      align="center"
    ></el-table-column>
    <el-table-column
      prop="school"
      label="毕业学校"
      align="center"
    ></el-table-column>
    <el-table-column label="创建时间" align="center">
      <template slot-scope="scope">{{ scope.row.data }}</template>
    </el-table-column>

    </el-table>
</template>

<script>
export default {
    data(){
        return{
            tableData:[{
                province:"湖南省",
                city:"湘西土家族苗族自治州",
                region:"湖南省湘西土家族苗族自治州",
                school: "红龙中学",
                data:"2017-12-24 17:09:42" ,
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