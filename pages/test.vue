<template>
    <div>
        <Header />
        <el-row>
            <el-col :span="4">
                <Navbar />
            </el-col>
            <el-col :span="20">
                <StudentManagement />
                <Pagination />
            </el-col>
        </el-row>
        <Footer />
    </div>
</template>