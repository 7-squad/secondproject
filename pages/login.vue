<template>
  <div class="box">
    <p class="logo"></p>
    <div class="contantbox">
      <div class="imgbox">
        <img src="../images/login/logo06.png" alt="" />
      </div>
      <Form />
    </div>
    <p class="footer">
      Copyright ©2017 粤ICP备15019482号 广东碧桂园职业学院版权所有 <br />
      地址：广东省清远市清城区东城街道大
    </p>
  </div>
</template>

<style lang="less">
body {
  background: url(../images/login/bg.png);
}
.box {
  margin: 100px auto;
  width: 1100px;
  height: 580px;
}
.box .logo {
  width: 100%;
  height: 104px;
  background: url(../images/login/logo.png) no-repeat;
}
.contantbox {
  position: relative;
  width: 100%;
  height: 390px;
}
.imgbox {
  margin-top: 50px;
  border: 1px solid #fff;
  padding: 10px;
  width: 100%;
  height: 310px;
}
.imgbox img {
  height: 100%;
}
.footer {
  font-size: 12px;
  color: #fff;
  text-align: center;
  line-height: 20px;
  background-color: transparent;
}
</style>