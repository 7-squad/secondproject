<template>
    <div>
        <Navbar />


        <Zujian />
        <Header />
        <el-row>
            <el-col :span="4">
                <Navbar />
            </el-col>
            <el-col :span="20">
                <Commendation />
                <Pagination />
            </el-col>
        </el-row>
        <Footer />
    </div>
</template>

<style>
.el-table th.gutter{
   display: table-cell!important;
 }
 </style>

