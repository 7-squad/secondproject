<template>
    <div>
        <Navbar />
<Tablebutton />

        <Zujian />
        
        <Header />
        <el-row>
            <el-col :span="4">
                <Navbar />
            </el-col>
            <el-col :span="20">
                <Province />
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
 

