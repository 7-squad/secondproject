<template>
  <div>
    <Clientheader />
    <div class="list">
      <div class="main-list">
        <div class="list-item">
          <span class="">审核状态</span>
          <a href="login">返回首页</a>
        </div>
        <div class="list-mian-item">
          <div class="dddd">
            <div class="asd">
              <span>推荐学生列表</span>
            </div>
            <Userlistinput />
          </div>
          <div>
            <StudentManagement />
          </div>
        </div>
      </div>
    </div>
    <Clientfooter />
  </div>
</template>

<style lang="less" scoped>
.list {
  width: 100%;
  background-color: #f2f3f7;
  min-width: 1170px;
}
.main-list {
  width: 1170px;
  margin: 0 auto;
}
.list-mian-item {
  width: 1170px;
  background-color: #ffffff;
}
.list-item {
  width: 1170px;
  display: inline-block;
  background: url(../images/reg/pico02.png) no-repeat left center;
  text-indent: 1em;
  color: #515b65;
  padding-top: 20px;
  padding-bottom: 20px;
}
.list-item a {
  float: right;
  text-decoration: none;
  background: url(../images/reg/back.png) no-repeat left center;
  color: #5f6671;
}
.asd {
  float: left;
  background: url(../images/reg/right.png) no-repeat left center;
  text-indent: 2em;
}
.dddd {
  padding-top: 30px;
}
</style>

