<template>
  <div class="head-box">
    <div class="headbox">
      <p class="headbox-right">
        <a href="" class="lefta">个人中心</a>
        <a href="">退出登录</a>
      </p>
    </div>
  </div>
</template>

<style lang="less">
.head-box {
  min-width: 1200px;
  max-width: 2600px;
  width: 100%;
  height: 120px;
  background: url(../images/reg/pico01.png) no-repeat left center;
}
.headbox {
  background: url(../images/reg/pico06.png) no-repeat 15px center;
  width: 1170px;
  height: 120px;
  margin: 0 auto;
  background-size: 540px 60px;
}
.headbox-right {
    float: right;
    margin-top: 50px;
}
.headbox-right a {
    color: #dce6ec;
    text-decoration: none;
    display: inline-block;
    width: 100px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 25px;
    border: 1px solid#dce6ec;
    font-size: 14px;
}
.lefta {
    margin-right: 20px;
}
</style>