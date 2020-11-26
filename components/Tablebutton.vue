<template>
  <div>
    <div>
      <el-row>
        <el-button type="danger" id="commendButton"> 表彰 </el-button>
      </el-row>
    </div>

    <div>
      <el-row gutter="60">
        <el-col :span="1">
          <el-button icon="el-icon-plus" size="mini" id="plusIcon"></el-button>
        </el-col>
        <el-col :span="1">
          <el-button
            icon="el-icon-edit"
            size="mini"
            id="modifyIcon"
          ></el-button>
        </el-col>
        <el-col :span="1">
          <el-button type="danger" id="deleteButton"> 删除 </el-button>
        </el-col>
      </el-row>
    </div>

    <div>
      <el-row gutter="60">
        <el-col :span="1">
          <el-button icon="el-icon-plus" size="mini" id="plusIcon"></el-button>
        </el-col>
        <el-col :span="1">
          <el-button
            icon="el-icon-edit"
            size="mini"
            id="modifyIcon"
          ></el-button>
        </el-col>
        <el-col :span="2">
          <el-button type="danger" id="deleteButton"> 删除 </el-button>
        </el-col>
        <el-col :span="1">
          <el-button size="mini" id="importicon"
            ><img src="/images/importicon.png" alt="导入"
          /></el-button>
        </el-col>
        <el-col :span="1">
          <el-button size="mini" id="exporticon"
            ><img src="/images/exporticon.png" alt="导出"
          /></el-button>
        </el-col>
      </el-row>
    </div>

    <div>
      <el-row gutter="60">
        <el-col :span="1">
          <el-button icon="el-icon-plus" size="mini" id="plusIcon"></el-button>
        </el-col>
        <el-col :span="1">
          <el-button
            icon="el-icon-edit"
            size="mini"
            id="modifyIcon"
          ></el-button>
        </el-col>
        <el-col :span="2">
          <el-button type="danger" id="deleteButton"> 删除 </el-button>
        </el-col>
        <el-col :span="1">
          <el-button
            icon="el-icon-caret-right"
            size="mini"
            id="rightIcon"
          ></el-button>
        </el-col>
        <el-col :span="1">
          <el-button size="mini" id="stopicon"
            ><img src="/images/stopicon.png" alt="停止"
          /></el-button>
        </el-col>
      </el-row>
    </div>

    <div>
      <el-row gutter="60">
        <el-col :span="1">
          <el-button icon="el-icon-plus" size="mini" id="plusIcon"></el-button>
        </el-col>
        <el-col :span="1">
          <el-button
            icon="el-icon-edit"
            size="mini"
            id="modifyIcon"
          ></el-button>
        </el-col>
        <el-col :span="1">
          <el-button
            icon="el-icon-delete"
            size="mini"
            id="deleteicon"
          ></el-button>
        </el-col>
        <el-col :span="1">
          <el-button
            icon="el-icon-caret-right"
            size="mini"
            id="rightIcon"
          ></el-button>
        </el-col>
        <el-col :span="1">
          <el-button size="mini" id="stopicon"
            ><img src="/images/stopicon.png" alt="停止"
          /></el-button>
        </el-col>
        <el-col :span="1">
          <el-button size="mini" id="consulticon"
            ><img src="/images/consulticon.png" alt="专家咨询"
          /></el-button>
        </el-col>
      </el-row>
    </div>

      <div>
      <el-row gutter="60">
        <el-col :span="1">
          <el-button icon="el-icon-plus" size="mini" id="plusIcon"></el-button>
        </el-col>
        <el-col :span="1">
          <el-button
            icon="el-icon-edit"
            size="mini"
            id="modifyIcon"
          ></el-button>
        </el-col>
        <el-col :span="2">
          <el-button type="danger" id="deleteButton"> 删除 </el-button>
        </el-col>
        <el-col :span="1">
          <el-button
            icon="el-icon-caret-right"
            size="mini"
            id="rightIcon"
          ></el-button>
        </el-col>
        <el-col :span="1">
          <el-button size="mini" id="stopicon"
            ><img src="/images/stopicon.png" alt="停止"
          /></el-button>
        </el-col>
          <el-col :span="1">
          <el-button size="mini" id="roleicon"
            ><img src="/images/roleicon.png" alt="角色"
          /></el-button>
        </el-col>
      </el-row>
    </div>

     <div>
      <el-row gutter="60">
        <el-col :span="1">
          <el-button icon="el-icon-plus" size="mini" id="plusIcon"></el-button>
        </el-col>
        <el-col :span="1">
          <el-button
            icon="el-icon-edit"
            size="mini"
            id="modifyIcon"
          ></el-button>
        </el-col>
        <el-col :span="2">
          <el-button type="danger" id="deleteButton"> 删除 </el-button>
        </el-col>
        <el-col :span="1">
          <el-button size="mini" id="powericon"
            ><img src="/images/powericon.png" alt="限权"
          /></el-button>
        </el-col>
      </el-row>
    </div>

       <div>
      <el-row gutter="60">
        <el-col :span="1">
          <el-button
            icon="el-icon-delete"
            size="mini"
            id="deleteicon"
          ></el-button>
        </el-col >
        <el-col :span="2">
        <el-button type="danger" id="exportButton"> 导出 </el-button>
        </el-col>
      </el-row>
    </div>

          <div>
      <el-row gutter="60">
        <el-col :span="1">
          <el-button
            icon="el-icon-back"
            size="mini"
            id="lefticon"
          ></el-button>
        </el-col >
        <el-col :span="2">
        <el-button type="danger" id="approvalButton">开始审批</el-button>
        </el-col>
      </el-row>
    </div>

<div>
  <el-row>
       <el-col>
          <el-button size="mini" id="exporticon"
            ><img src="/images/exporticon.png" alt="导出"
          /></el-button>
        </el-col>
  </el-row>
</div>

  </div>
</template>

<style lang="less">
#commendButton,
#deleteButton,
#exportButton,
#approvalButton {
  background-color: #7f201e;
  height: 38px;
  width: 88px;
  letter-spacing: 5px;
}
#approvalButton {
  letter-spacing:0;
}
#modifyIcon,
#plusIcon,
#rightIcon,
#importicon,
#exporticon,
#stopicon,
#deleteicon,
#consulticon,
#roleicon,
#powericon,
#lefticon {
  height: 38px;
  font-size: 17px;
}
</style>