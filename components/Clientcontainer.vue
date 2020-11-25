<template>
  <div class="main">
    <div class="container">
      <div class="contanttit">
        <span class="contanttit-left">注册账号</span>
        <a href="login">返 回</a>
      </div>

      <div class="contantinn"></div>
    </div>
  </div>
</template>
<style lang="less">
.main{
  width: 100%;
  height: 516px;
  background-color: rgb(197, 15, 182);
}
.container {
  margin: 0 auto;

  background-color: rgba(13, 241, 135, 0.904);
}
.contanttit {
  margin: 0 auto;
  margin-left: -27px;
  width: 1170px;
  height: 60px;
  line-height: 60px;
}

.contanttit-left {
  background: url(../images/reg/pico02.png) no-repeat left center;
  display: inline-block;
  font-size: 16px;
  text-indent: 1em;
}
.contanttit a {
  display: inline-block;
  float: right;
  color: #5f6671;
  font-size: 16px;
  background: url(../images/reg/back.png) no-repeat left center;
  text-indent: 1em;
}
.contantinn {
  margin: 0 auto;
  width: 1170px;
  height: 391px;
  background-color: rgb(190, 30, 30);
}
</style>