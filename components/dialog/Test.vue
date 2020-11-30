<template>
            <el-table
            tooltip-effect="dark"
          :data="tableData"
          height="550"
          style="width: 100%"
          border
          default-expand-all
           :header-cell-style="{
      'background-color': '#f0f5f8',
      'border-color':'#dedfe3'
    }"
    :cell-style="tableCellStyle"
    
        >
          <el-table-column type="selection" width="55" header-align="center">
    </el-table-column>
          <el-table-column label="省份"
            header-align="center" 
           
           >
          
             
                <el-select  v-model="scope.row.floorRange"  placeholder="活动区域">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
           
              
            </el-table-column>
             <el-table-column label="专业名称"
            header-align="center" prop="floorRange">
              <template slot-scope="scope">
           
                 <el-select v-model="scope.row.floorRange" placeholder="活动区域">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
                  
        
              </template>
            </el-table-column>
             <el-table-column label="科目类型"
            header-align="center" prop="floorRange">
              <template slot-scope="scope">
                <el-select
                  v-model="scope.row.floorRange"
                 
                  placeholder="理科"
                  @change="CheckedBuildings"
                >
                  <el-option
                    v-for="item in like"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                  
        
                </el-select>
              </template>
            </el-table-column>
             <el-table-column label="招生人数"
            header-align="center" >
             <el-input v-model="input.shuliang"  ></el-input>
            </el-table-column>
           
        </el-table>

</template>

<script>
export default {
    data() {
    return {
 
      tableData: [
        //表格数据
        {
          shengfen: "", //楼栋
          zhuanyemingcheng: [], //楼层范围
          type: [] ,
        },
        
       
      ],
      input:{
          shuliang:'1662'
      },
       
    };
  },

methods:{
   

}
}
</script>