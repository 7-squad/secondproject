<template>
     <el-table
    :data="tableData"
    border
    stripe
    show-summary
    style="width: 100%"
    :header-cell-style="{
      'background-color': '#f0f5f8',
      'border-color':'#dedfe3'
    }"
    :cell-style="tableCellStyle"
    :summary-method="getSummaries"
    >
    <el-table-column
      prop="school"
      label="项目/中学"
      header-align="center">
    </el-table-column>
    <el-table-column
      prop="name"
      label="佛冈县一中"
      align="center">
    </el-table-column>
    <el-table-column
      prop="amount1"
      align="center"
      label="佛冈县佛冈一中">
    </el-table-column>
    <el-table-column
      prop="amount2"
      align="center"
      label="佛冈县佛冈中学">
    </el-table-column>
    <el-table-column
      prop="amount3"
      align="center"
      label="佛冈县第一中学">
    </el-table-column>
    <el-table-column
      prop="amount3"
      align="center"
      label="南阳中学">
    </el-table-column>
    <el-table-column
      prop="amount3"
      align="center"
      label="清新区凤霞中学">
    </el-table-column>
    <el-table-column
      prop="amount3"
      align="center"
      label="清新区滨江中学">
    </el-table-column>
    <el-table-column
      prop="amount3"
      align="center"
      label="清新区第一中学">
    </el-table-column>
  </el-table>
</template>

<script>
export default {
    data() {
      return {
        tableData: [{
          school: '待完善资料',
          name: '231',
          amount1: '234',
          amount2: '3.2',
          amount3: 10
        }, {
          school: '审核通过',
          name: '21',
          amount1: '165',
          amount2: '4.43',
          amount3: 12
        }, {
          school: '退回修改',
          name: '23',
          amount1: '324',
          amount2: '1.9',
          amount3: 9
        }, {
          school: '待审核',
          name: '24',
          amount1: '621',
          amount2: '2.2',
          amount3: 17
        }]
      };
    },
     methods: {
      getSummaries(param) {
        const { columns, data } = param;
        const sums = [];
        columns.forEach((column, index) => {
          if (index === 0) {
            sums[index] = '合计';
            return;
          }
          const values = data.map(item => Number(item[column.property]));
          if (!values.every(value => isNaN(value))) {
            sums[index] = values.reduce((prev, curr) => {
              const value = Number(curr);
              if (!isNaN(value)) {
                return prev + curr;
              } else {
                return prev;
              }
            }, 0);
  
          } 
        });

        return sums;
      },
      tableCellStyle() {
    return "border-color: #dedfe3;";
  },
    }
}
</script>

  