<template>
  <el-table
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    style="width: 100%"
    header-align="center"
    :header-cell-style="{
      'background-color': '#f0f5f8',
      'border-color': '#dedfe3',
    }"
    stripe
    border
    :cell-style="tableCellStyle"
    @selection-change="handleSelectionChange"
  >
    <el-table-column type="selection" width="55"></el-table-column>
    <el-table-column type="index" width="55" header-align="center" label="序号">
    </el-table-column>
    <el-table-column label="账号" header-align="center">
      <template slot-scope="scope">{{ scope.row.userId }}</template>
    </el-table-column>

    <el-table-column
      prop="name"
      label="姓名"
      header-align="center"
    ></el-table-column>

    <el-table-column label="手机号码" width="120px" header-align="center">
      <template slot-scope="scope">{{ scope.row.phonenum }}</template>
    </el-table-column>

    <el-table-column
      prop="email"
      label="邮箱"
      header-align="center"
      show-overflow-tooltip
    ></el-table-column>

    <el-table-column label="出生日期" header-align="center">
      <template slot-scope="scope">{{ scope.row.brith }}</template>
    </el-table-column>

    <el-table-column
      prop="role"
      label="角色"
      header-align="center"
    ></el-table-column>

    <el-table-column
      prop="usertype"
      label="用户类型"
      header-align="center"
    ></el-table-column>

    <el-table-column
      prop="states"
      label="状态"
      header-align="center"
    ></el-table-column>
  </el-table>
</template>

<script>
export default {
  props: {
  },
    beforeMount(){
   this.$store.dispatch(
      "usermag/getUsermags",
      this
    );
    },
  data() {
    return {
      // tableData: [
      //   {
      //     account: "15876337709",
      //     name: "胡宁义",
      //     telnumber: "13987654321",
      //     email: "ming@casfasfca.com.cn",
      //     date: "1975-06-06",
      //     role: "领导查看",
      //     CustomerType: "后台用户",
      //     state: "启用中",
      //   },
      // ],
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
      console.log("this.multipleSelection: %O", this.multipleSelection);
    },
    tableCellStyle() {
      return "border-color: #dedfe3;";
    },
  },
    computed:{
    tableData:{
      get(){
        return this.$store.state.usermag.usermags;
      }
    }
  }
};
</script>