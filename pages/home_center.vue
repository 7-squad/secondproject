<template>
  <div>
    <Clientheader />
   <el-container>
 
  <div class="main">
    <div class="container">
     <div class="left">
<img src="../images/首页_03.png">
<div class="tx">
<p>推荐学生</p>
<div class="text">
<p>点击进入</p><img src="../images/首页_10.png"></div>
</div>
</div>



 <div class="right">
<img src="../images/首页_05.png">
<div class="tx">
<p>审核状态</p>
<div class="text">
<p>点击进入</p><img src="../images/首页_10.png"></div>
</div>
</div>
      
    </div>
  </div>

</el-container>
    <Clientfooter />
  </div>
</template>
<style lang = "less" scoped>
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    height: 550px;
  }
  .main {
  width: 100%;
  height: 589px;
  background-color:#e6ebf5;
    display: flex;
 align-items: center;
 justify-content: center;
  /* // justify-content:space-around; */
}
.container {
  margin: 0 auto;
 
display: flex;
width: 70%;
  justify-content:space-between;
}
.left,.right{
  height: 350px;
  width: 504px;
  background: #ffffff;
  border:1px solid #BFBFBF;
  box-shadow:0px 0px  10px 5px #aaa;
}

.left>img,.right>img{
  margin-top: 10px;
  margin-left: 15px;
}
.tx{
   width: 494px;
  display: flex;
  justify-content:space-between;
}
.tx>p{
  margin-left:15px;
}

.text{
display: flex;
}
</style>