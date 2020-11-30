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
      prop="Template"
      label="身份证模板"
      align="center"
    ></el-table-column>
    <el-table-column
      prop=""
      label="模板照片"
      min-width="300px"
    >
    <el-upload
    action="https://jsonplaceholder.typicode.com/posts/"
    list-type="picture-card"
    :on-preview="handlePictureCardPreview"
    :on-remove="handleRemove">
    <i class="el-icon-plus"></i>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
    <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>
    </el-table-column>

    <el-table-column
      prop="data"
      label="身份证模板"
      align="center"
    ></el-table-column>
    </el-table>
</template>

<script>
export default {
    data(){
        return{
            tableData:[{
                Template:"身份证模板",
                data:"2018-06-28" ,
            },
            {
                Template:"体验资料模板",
                data:"2018-06-28" ,
            },
            {
                Template:"贫困资料模板",
                data:"2018-06-28" ,
            },
            ],
            multipleSelection:[],
            dialogImageUrl: '',
            dialogVisible: false,
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
  handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
    },
};
</script>