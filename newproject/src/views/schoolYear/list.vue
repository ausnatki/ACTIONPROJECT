<template>
  <div class="mybox">
    <div class="mybox-top">
      <el-row :gutter="10">
        <el-col :xs="4" :sm="4" :md="4" :lg="5" :xl="4">
          <el-input v-model="input" placeholder="请输入学期关键字进行查询" />
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
      :data="filteredData"
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
        prop="stageName"
        label="学年"
      />
      <el-table-column
        prop="createTime"
        label="创建时间"
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
import { Getyear, Edityear } from '@/api/year'
export default {
  data() {
    return {
      tableData: [
      ],
      input: ''
    }
  },
  computed: {
    filteredData() {
      let filtered = this.tableData
      const keyword = this.input

      if (keyword) {
        filtered = filtered.filter(item => {
          return item.stageName.includes(keyword)
        })
      }

      return filtered
    }
  },
  created() {
    this.getallyear()
  },
  methods: {
    // 获取所有年份信息
    getallyear() {
      Getyear().then(result => {
        // console.log('获取素有年份')
        // console.log(result)
        this.tableData = result.data
        this.tableData = this.tableData.map(e => {
          e.createTime = e.createTime.replace('T', ' ')
          return e
        })
      }).catch(Response => {
        console.log(Response)
      })
    },
    // 修改学年状态
    edityear(id) {
      Edityear().then(result => {
        console.log(result)
      }).catch(Response => {
        console.log(Response)
      })
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
    },
    // 点击启用后的事件
    clickEnable(index, row) {
      // 判断当前状态是否冲突
      if (row.state === true) {
        // 如果已经是启用后的状态了就是提醒用户
        this.$message({
          message: '此活动已经是启用后的状态了！(●◡●)',
          type: 'infi'
        })
        return
      }
      // 修改操作
      Edityear(row.id).then(reuslt => {
        this.$message({
          message: '启用成功！',
          type: 'success'
        })
        this.tableData[index].state = true
      }).catch(Response => {
        this.$message({
          message: '发生错误！！',
          type: 'error'
        })
      })
    },
    // 点击禁用后的事件
    clickDisable(index, row) {
      // 判断当前状态是否冲突
      if (row.state === false) {
        this.$message({
          message: '当前已经是禁用状态(●-●)',
          type: 'info'
        })
        return
      }
      console.log(row.id)
      Edityear(row.id).then(result => {
        this.$message({
          message: '禁用成功！',
          type: 'success'
        })
        this.tableData[index].state = false
      }).catch(Response => {
        this.$message({
          message: '发生错误',
          type: 'error'
        })
      })
    },
    // 点击添加后的事件
    onadd() {
      this.$router.push({ path: 'add' })
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

