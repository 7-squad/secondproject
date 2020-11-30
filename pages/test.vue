<template>
    <div>
        <Lefticon />
        <Approvalbutton />
        <Exportbutton />
        <Powericon />
        <Roleicon />
        <Consulticon />
        <Deleteicon />
        <Stopicon />
        <Righticon />
        <Exporticon />
        <Importicon />
        <Deletebutton />
        <Modifyicon />
        <Plusicon />
        <Navbar />


        <Zujian />
        
        <Header />
        <el-row>
            <el-col :span="4">
                <Navbar />
            </el-col>
            <el-col :span="20">
                <Information />
                <div class="examine">
                <Examine />
                </div>
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
 .examine{
     padding: 10px 0px 10px 0px ;
 }
 </style>
 

