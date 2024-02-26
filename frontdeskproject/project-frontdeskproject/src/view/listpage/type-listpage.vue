<template>
    <div class="mybox">
    <el-table
      :data="tableData"
      style="width: 100%"
      :row-class-name="tableRowClassName">
      <el-table-column
        prop="date"
        label="编号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="活动名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="活动类别"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="活动分值"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="完成状态"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>89 ,-0-89 
    </el-table>
</div>
  </template>
  
  <style>
    .el-table .warning-row {
      background: oldlace;
    }
  
    .el-table .success-row {
      background: #f0f9eb;
    }
    .mybox{
        padding: 5px;
    }
  </style>
  
  <script>
    export default {
      name:'type-listpage',
      methods: {
        tableRowClassName({rowIndex}) {
          if (rowIndex === 1) {
            return 'warning-row';
          } else if (rowIndex === 3) {
            return 'success-row';
          }
          return '';
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
          }]
        }
      }
    }
  </script>