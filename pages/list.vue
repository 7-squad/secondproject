<template>
  <div>
    <div class="list">
      <div class="main-list">
        <div class="list-item">
          <span class="">审核状态</span>
          <a @click="prev" href="#">返 回</a>
        </div>
        <div class="list-mian-item">
          <div class="dddd">
            <div class="asd">
              <span>推荐学生列表</span>
            </div>
            <div class="input">
              <Userlistinput />
            </div>
          </div>
          <div>
            <StudentsList :tableData="fetchtableData" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "loginbefore",
   data() {
    return {
      fetchtableData: []
    }
  },
  async fetch() {
    this.fetchtableData = await fetch("/api/stuinformation").then((res) => res.json());
    console.log(this.fetchtableData);
  },
  // 返回上一级页面
  methods: {
    prev() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="less" scoped>
.list {
  width: 100%;
  background-color: #f2f3f7;
  min-width: 1170px;
  min-height: 589px;
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
  padding: 5px;
}
.dddd {
  padding-top: 30px;
}
.input {
  float: right;
}
</style>

