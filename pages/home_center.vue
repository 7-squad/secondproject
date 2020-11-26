<template>
  <div>
    <Clientheader />
 
<div class="box">


<el-row type="flex" class="row-bg" justify="space-around">
 <div class="grid-content bg-purple">
   <a href="#">
    <img src="../images/首页_03.png">
    <div class="tx">
<p>推荐学生</p>
<div class="text">
<p>点击进入</p><img src="../images/首页_10.png"></div>

</div>
</a>
    </div>
  <div class="grid-content bg-purple-light">
     <a href="#">
    <img src="../images/首页_05.png">
    <div class="tx">
<p>审核状态</p>
<div class="text">
<p>点击进入</p><img src="../images/首页_10.png"></div>
</div>
</a></div>

</el-row>
</div>
 


    <Clientfooter />
  </div>
</template>
<style lang = "less" scoped>
.box,.row-bg{
background: rgb(159,195,210);
background: linear-gradient(180deg, rgba(159,195,210,1) 0%, rgba(241,241,241,1) 53%, rgba(247,247,247,1) 100%);
  
}
 .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple,.bg-purple-light {

    height: 350px;
  width: 504px;
  background: #ffffff;
  border-bottom:2px solid #BFBFBF;
  box-shadow:0px 10px 30px 0px #aaa
  }
 .grid-content{
   justify-content: center;
 }

  .grid-content>a>img {
   margin-top: 10px;
  margin-left: 15px;
   
  }
  .row-bg {
     margin: 0 auto;
  width: 1170px;
 height: 589px;
    padding: 10px 0;
   
    align-items: center;

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

a{
  color: black;
  text-decoration: none;
}



</style>