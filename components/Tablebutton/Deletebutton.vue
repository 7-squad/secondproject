<template>
     <el-col>
          <el-button type="danger" id="deleteButton" @click="$emit('do-delete')"> 删除 </el-button>
        </el-col>
</template>
<style lang="less">
#deleteButton{
     background-color: #7f201e;
  height: 38px;
  width: 88px;
  letter-spacing: 5px;
}
</style>
