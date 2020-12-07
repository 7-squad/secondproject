<template>
  <div>
    <el-col>
      <el-button
        icon="el-icon-plus"
        size="mini"
        id="plusIcon"
        @click="dialogFormVisible = true"
      ></el-button>
    </el-col>

    <el-dialog :visible.sync="dialogFormVisible">
      <div slot="title" class="dialog-title">
        <img src="../../images/reg/tc.png" />
        <span class="title-text">新增模板资料</span>
      </div>
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="模板类型:">
          <el-select
            v-model="formInline.region"
            placeholder="请选择模板资料类型"
          >
            <el-option label="类型一" value="1"></el-option>
            <el-option label="类型二" value="2"></el-option>
          </el-select>
        </el-form-item>
        <br />
        <el-form-item label="模板类型:"
          ><br />
          <div class="box">
            <div>
              <el-upload
                list-type="picture-card"
                :on-preview="handlePictureCardPreview"
                :on-remove="handleRemove"
              >
                <i class="el-icon-plus"></i>
              </el-upload>
              <el-dialog :visible.sync="dialogVisible" size="tiny">
                <img width="100%" :src="dialogImageUrl" alt="" />
              </el-dialog>
            </div>
          </div>
          <!-- <el-autocomplete></el-autocomplete> -->
        </el-form-item>
      </el-form>

      <div class="button">
        <el-button
          type="danger"
          id="qdtButton"
          @click="dialogFormVisible = false"
        >
          确定
        </el-button>
        <el-button
          type="danger"
          id="exportButton"
          @click="dialogFormVisible = false"
        >
          取消
        </el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogTableVisible: false,
      dialogFormVisible: false,
      formInline: {
        user: "",
        region: "",
      },
    };
  },
};
</script>


<style lang="less" scoped>
.title-text {
  color: #007aa3;
}
.el-dialog__body {
  padding: 10px 10px 10px 10px;
}
.el-dialog__header {
  background-color: #f0f5f8;
  padding: 10px 10px 10px;
  border-bottom: 1px solid #e2e2e2;
}
// .el-form-item {
// }
.box {
  width: 550px;
  height: 150px;
  border: 1px solid #e8e8e8;
  margin-left: -70px;
}
#exportButton,
#qdtButton {
  height: 38px;
  width: 88px;
  letter-spacing: 5px;
  background-color: #017e9e !important;
}
.el-button--danger {
  border-color: #007aa3;
}
.el-button {
  height: 35px !important;
  font-size: 15px;
  line-height: 12px;
  border-radius: 5px;
}
.button {
  margin-top: 20px;
  margin-left: 200px;
}
.el-dialog {
  width: 40%;
}
.el-form {
  border-bottom: 1px solid #e2e2e2;
}
</style>