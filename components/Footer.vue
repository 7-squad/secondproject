<template>
  <el-row class="el-footer-row">
    <el-col :span="24">
      <div class="grid-content bg-purple-dark grid-content-p">
        <p>Copyright ©2017 粤ICP 备 15019482 号 广东碧桂园职业学院版权所有</p>
      </div>
    </el-col>
  </el-row>
</template>

<style>
.el-row {
  min-width: 1350px;
}
.el-footer-row {
  margin-top: 20px;
  min-width: 1350px;
}

.bg-purple-dark {
  text-align: center;
  background: #7699ad;
}

.grid-content {
  min-height: 36px;
}
.grid-content-p {
  height: 50px;
  color: white;
  padding: 14.5px;
}
</style>