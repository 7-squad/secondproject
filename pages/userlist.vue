<template>
    <div>
<Clientheader/>
  <div class="main">
    <div class="container">
      <div class="contanttit">
        <span class="contanttit-left">推荐学生</span>
        <a href="login">返 回</a>
      </div>

      <div class="contantinn">
        <div class="zcyh">
          <p>填写推荐学生信息</p>
        </div>
        <Userlist/>
        
      </div>

    </div>
  </div>
<Clientfooter/>


    </div>
</template>
<style scoped>
.main {
  width: 100%;
  height: 100%;
  background-color: #f2f3f7;
}
.container {
  margin: 0 auto;
  background-color: #f2f3f7;
}
.contanttit {
  margin: 0 auto;
  width: 1170px;
  height: 60px;
  line-height: 60px;
}

.contanttit-left {
  background: url(../images/reg/pico02.png) no-repeat left center;
  display: inline-block;
  font-size: 16px;
  text-indent: 1em;
  color: #515b65;
}
.contanttit a {
  text-decoration: none;
  display: inline-block;
  float: right;
  color: #5f6671;
  font-size: 16px;
  background: url(../images/reg/back.png) no-repeat left center;
  text-indent: 1em;
}
.contantinn {
  margin: 0 auto;
  /* // padding: 40px 0; */
  width: 1170px;
  
  background-color: #ffffff;
  padding-top: 20px;
}
.zcyh {
  border-bottom: 1px solid#c0c0c0;
  width: 1150px;
  height: 40px;
  margin: 0 auto;
}
.zcyh p {
  background: url(../images/reg/right.png) no-repeat left center;
  display: inline-block;
  font-weight: bold;
  text-indent: 2em;
  color: #515b65;
}
.border {
  position: relative;
  width: 800px;
  height: 345px;
  margin: 40px auto;
  border: 1px solid#c0c0c0;
}
.border p {
  vertical-align: middle;
  text-align: center;
  width: 155px;
  background-color:#ffffff;
  position: absolute;
  top: -10px;
  left: 336px;
  color: #545C67;
  font-size: 16px;
}

.el-table th.gutter{
   display: table-cell!important;
 }
 
</style>