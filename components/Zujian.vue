<template>
<!-- 招生计划设置 -->
     <div class="handle-box">
                招生年度：
                <el-select placeholder="2018年春节招生" class="handle-select mr10">
                    <el-option key="1" label="广东省" value="广东省"></el-option>
                    <el-option key="2" label="湖南省" value="湖南省"></el-option>
                </el-select>
                
                <el-button type="primary" @click="handleSearch" class="el-button el-button--default is-plain">
                    搜     索</el-button>


<div class="input">
    <!-- 招生老师设置 -->
所在地区：<el-input placeholder="请输入所在地区" class="handle-input"></el-input>
<el-button type="primary" @click="handleSearch" class="el-button el-button--default is-plain">
                    搜     索</el-button>


</div>
            </div>


</template>


<style lang="less" scoped>
// 招生计划设置
.handle-select{
padding: 10px;
}
.el-button--primary.is-plain[data-v-346a9102] {
    color: black; 
    background: #fff;
    border-color: #cbd1d3;
    
}
// 招生老师设置
.handle-input {
    width: 300px;
    display: inline-block;
    padding: 10px;
}
</style>