<template>
  <div class="mybox">
  <el-table
    :data="tableData"
    style="width: 100%"
    :row-class-name="tableRowClassName">
    <el-table-column
      label="编号"
     >
      <template slot-scope="scope">
        {{ scope.$index+1 }}
      </template>
    </el-table-column>
    <el-table-column
      prop="activityName"
      label="活动名称"
      >
    </el-table-column>
    <el-table-column
      prop="eventDescription"
      label="活动介绍"
      >
    </el-table-column>
    <el-table-column
      prop="academicYear"
      label="活动人员数量"
     >
    </el-table-column>
    <el-table-column
      prop="activityStartTime"
      label="活动开始时间"
      >
    </el-table-column>
    <el-table-column
      prop="activityEndTime"
      label="活动结束时间"
      >
    </el-table-column>
    <el-table-column
      label="操作"
     >
     <template slot-scope="scope">
        <el-link target="_blank" @click="clickto(scope.$index)">进入详情</el-link>
     </template>
    </el-table-column>
  </el-table>
</div>
</template>
<script>
import { GetTypeList } from '@/network/api/action';
export default {
name: 'type-listpage',
methods: {
  tableRowClassName({ rowIndex }) {
    
    if (rowIndex%4 === 1) {
      return 'warning-row';
    } else if (rowIndex%4 === 3) {
      return 'success-row';
    }
    return '';
  },
  initdata(){
    const type = this.$route.params.type;
    GetTypeList(type).then(result=>{
      this.action = result.data
      this.tableData = this.action.map(item => item.action);
    }).catch(()=>{
      this.$message({
        type:'error',
        message:'发生错误服务器获取信息失败'
      })
    })
  },
  clickto(index){
    const action = this.action[index]
    this.$router.push({ name: 'DesPage', params: { action: action } })
  }
},
data() {
  return {
    tableData: [{
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄',
    }, {
      date: '2016-05-04',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    }, {
      date: '2016-05-01',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄',
    }, {
      date: '2016-05-03',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    }],
    action:''
  }
},
created(){
  this.initdata()
}
}

</script>

<style scoped>
.el-table .warning-row {
background: oldlace;
}

.el-table .success-row {
background: #f0f9eb;
}
.mybox{
  padding: 0px 10px 10px 10px ;
}
</style>