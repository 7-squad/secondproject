<template>
  <div>
    <el-container>
      <div class="main">

        <el-menu class="container"  :router="true" >
          <el-menu-item class="left" index="/userlist">
            <img src="../images/首页_03.png" />
            <div class="tx">
              <p>推荐学生</p>
              <div class="text">
                <p>点击进入</p>
                <img src="../images/首页_10.png" />
              </div>
            </div>
          </el-menu-item>
        
            <el-menu-item class="right"  index="/list">
              <img src="../images/首页_05.png" />
              <div class="tx">
                <p>审核状态</p>
                <div class="text">
                  <p>点击进入</p>
                  <img src="../images/首页_10.png" />
                </div>
              </div>
            </el-menu-item>

        </el-menu>


      </div>
    </el-container>
  </div>
</template>

<script>
export default {
  layout: "loginbefore",
};
</script>
<style lang = "less" scoped>
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  height: 550px;
}
.main {
  width: 100%;
  height: 589px;
  background-color: #e6ebf5;
  display: flex;
  align-items: center;
  justify-content: center;
  /* // justify-content:space-around; */
}
.container {
  margin: 0 auto;
  display: flex;
  width: 70%;
  justify-content: space-between;
}
.left,
.right {
  height: 350px;
  width: 504px;
  background: #ffffff;
  border: 1px solid #bfbfbf;
  box-shadow: 0px 0px 10px 5px #aaa;
}

.left > img,
.right > img {
  margin-top: 10px;
  margin-left: 15px;
}
.tx {
  width: 494px;
  display: flex;
  justify-content: space-between;
}
.tx > p {
  margin-left: 15px;
}

.text {
  display: flex;
}
</style>