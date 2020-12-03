<template>
<div>
    <div class="dialog-title">
  <img src="../images/reg/tc.png">
    <span class="title-text">学生基本信息</span>
    </div>
    
   
    <div class="wenben">
        <div class="left">
        <p>姓名：{{data.name}}</p>
        <p>招生年度：{{data.date}}</p>
        <p>招生类型：{{data.recruit}}</p>
        <p>渠道类别：其他</p>
        </div>

<div class="center-left">
        <p>科目类型：文科</p>
        <p>专业名称：{{data.Majorname}}</p>
        <p>所在地区：{{data.address}}</p>
       
        <el-form>
        <el-form-item>
            家庭困难是否属实:
             <el-radio v-model="radio" label="1">是</el-radio>
  <el-radio v-model="radio" label="2">否</el-radio>
        </el-form-item>
        </el-form>
        
        </div>

<div class="center-right">
        <p>毕业学校：{{data.school}}</p>
        <p>分数段：{{data.fraction}}</p>
        <p>联系电话：{{data.telnumber}}</p>
        
        </div>

         <div class="right">
        <p>身份证号：4123456789987654321</p>
        <p>是否贫困生：{{data.Poverty}}</p>
        <p>推荐方式：{{data.method}}</p>
        
        </div>
    </div>

    <br>
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
      prop="Template"
      label="身份证明材料（点击图片可以放大查看）"
      align="center"
    >
     <template slot-scope="scope">
          <el-image style="width: 200px; height: 100px" :src="scope.row.Template" :preview-src-list="[scope.row.Template]">
            <div slot="error" class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-image>
        </template>

    </el-table-column>
   
   
    <el-table-column
      prop="pinkun"
      label="贫困证明材料（点击图片可以放大查看）"
      align="center"
    >
   
     <template slot-scope="scope">
          <el-image style="width: 100px; height: 200px" :src="scope.row.pinkun" :preview-src-list="[scope.row.pinkun]">
            <div slot="error" class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-image>
        </template>
    </el-table-column>

     <el-table-column
      prop="tijian"
      label="体检材料（点击图片可以放大查看）"
      align="center"
    >
    <template slot-scope="scope">
          <el-image style="width: 100px; height: 200px" :src="scope.row.tijian" :preview-src-list="[scope.row.tijian]">
            <div slot="error" class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-image>
        </template>
    </el-table-column>

    
    </el-table>
<br>
    <Examine />
</div>
</template>

<script>
export default {
  props:{
    data:{
      type:Object,
      default: function(){
        return {
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
        };
      }
    }
  },
    data(){
        return{
            radio:"1",
            tableData:[{
                Template:"../images/首页_03.png",
                pinkun:"../images/首页_03.png",
                tijian:"../images/首页_03.png"
               
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

<style lang="less" scoped>
.dialog-title{
    border-bottom: 1px solid rgba(175, 173, 173, 0.459);
}
.wenben {
    display: flex;
}
.left,.center-left,
.center-right
{
    padding-right: 100px;
}
p{
   line-height:22px;
   padding:10px 0;


}
</style>