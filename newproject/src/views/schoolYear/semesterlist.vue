<template>
  <div class="mybox">
    <div class="mybox-top">
      <el-row :gutter="10">
        <el-col :xs="4" :sm="4" :md="4" :lg="5" :xl="4">
          <el-input v-model="input" placeholder="请输入学生学号查询" />
        </el-col>
        <el-col :xs="2" :sm="2" :md="2" :lg="2" :xl="2">
          <el-button type="primary">搜索</el-button>
        </el-col>
        <el-col :xs="3" :sm="3" :md="3" :lg="3" :xl="3">
          <el-button type="success" icon="el-icon-edit" @click="onadd">添加学年</el-button>
        </el-col>
      </el-row>
    </div>
    <el-table
      :data="tableData"
      border
      style="width: 100%"
    >
      <el-table-column
        label="编号"
        width="100"
        sortable
      >
        <template slot-scope="scope">
          {{ scope.$index+1 }}
        </template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="学期名称"
      />

      <el-table-column
        prop="state"
        label="状态"
      >
        <template slot-scope="scope">
          <el-tag
            effect="dark"
            :type="switchStateType(scope.row)"
          >
            {{ switchStateLable(scope.row) }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="success"
            plain
            @click="clickEnable(scope.$index, scope.row)"
          >启用</el-button>

          <el-button
            size="mini"
            type="danger"
            plain
            @click="clickDisable(scope.$index, scope.row)"
          >禁用</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { Getsemester, Editsemester } from '@/api/year'
export default {
  data() {
    return {
      tableData: [
      ],
      input: ''
    }
  },
  created() {
    this.getallyear()
  },
  methods: {
    // 获取所有的学期信息
    getallyear() {
      Getsemester().then(result => {
        console.log(result)
        this.tableData = result.data
      }).catch(Response => {
        // console.log(Response)
        this.$message({
          message: '获取列表失败',
          type: 'error'
        })
      })
    },
    // 点击启用后的
    clickEnable(index, row) {
      console.log('这里是我的row数据')
      if (row.state === true) {
        this.$message({
          message: '此学期已经是开启状态了(● u ●)',
          type: 'info'
        })
        return
      }

      Editsemester(row.id).then(result => {
        console.log('进入了这里的启用状态')
        this.$message({
          message: '启用成功',
          type: 'success'
        })
        this.tableData[index].state = true
      }).catch(Response => {
        console.log('进入了这里的启用失败状态')
        this.$message({
          message: '启用失败！',
          type: 'error'
        })
      })
    },
    // 点击禁用后的
    clickDisable(index, row) {
      if (row.state === false) {
        this.$message({
          message: '已经是禁用状态了',
          type: 'info'
        })
        return
      }

      Editsemester(row.id).then(result => {
        this.$message({
          message: '禁用成功！',
          type: 'success'
        })
        this.tableData[index].state = false
      }).catch(Response => {
        this.$message({
          message: '修改失败',
          type: 'error'
        })
      })
    },
    // 点击添加学年的事件
    onadd() {

    },
    // 确定状态文本
    switchStateLable(row) {
      console.log(row)
      switch (row.state) {
        case true:
          return '状态启用'
        case false:
          return '状态禁用'
        default:
          return '未知状态'
      }
    },
    // 确定状态标签
    switchStateType(row) {
      switch (row.state) {
        case true:
          return ''
        case false:
          return 'danger'
        default:
          return 'info'
      }
    }
  }
}
</script>

  <style>

  .mybox{
      padding: 10px;
  }
  .mybox-top{
    padding-bottom: 10px;
  }
  </style>

