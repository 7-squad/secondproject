<!-- 学生详情 -->
<template>
    <div class="main_container">
       
        <el-row>
            <el-col :span="1">
                <Righticon />
            </el-col>
            
            <el-col :span="1">
                <Approvalbutton />
            </el-col>
        </el-row>
        <br>
        <el-row>
            <el-col>
                <Addproval :data="data" />
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    computed:{
        data(){
            return this.$store.state.global.stuInfo;
        }
    }
}
</script>
<style lang="less" scoped>
.main_container{
    margin: 0 25px;
}
</style>