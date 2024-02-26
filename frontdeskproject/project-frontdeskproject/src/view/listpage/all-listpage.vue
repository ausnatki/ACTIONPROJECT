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
        label="活动名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="活动介绍"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="活动人员数量"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="活动开始时间"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="活动结束时间"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="操作">
      </el-table-column>
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
      name:'all-listpage',
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