<template>
  <div class="mybox">
    <el-table
      v-loading="loading"
      :data="tabledata"
      border
      style="width: 100%"
    >
      <el-table-column
        label="编号"
        width="50"
      >
        <template slot-scope="scope">
          {{ scope.$index+1 }}
        </template>
      </el-table-column>
      <el-table-column
        prop="userName"
        label="用户名称"
        width="120"
      />
      <el-table-column
        prop="activityName"
        label="活动名称"
        width="180"
      />

      <el-table-column
        prop="state"
        label="状态"
      >
        <template slot-scope="scope">
          <el-tag :type="switchtypestate(scope.row.state)">{{ switchstate(scope.row.state) }}</el-tag>
        </template>
      </el-table-column>

      <el-table-column
        prop="activityName"
        label="报名时间"
        width="180"
      >
        <template slot-scope="scope">
          {{ inittime(scope.row.startTime) }}
        </template>
      </el-table-column>
      <el-table-column
        label="操作"
      >
        <template slot-scope="scope">
          <el-button type="primary" size="mini" plain @click="clickFinish(scope.row)">活动完成</el-button>
          <el-button type="danger" size="mini" plain @click="clickNoFinish(scope.row)">取消</el-button>
        </template>
      </el-table-column>

    </el-table>
  </div>
</template>

<script>
import { GetUserByAction, ActionFinish, ActionNoFinish } from '@/api/action'
export default {
  name: 'Useraction',
  props: {
    // aid: {
    //   type: Number,
    //   required: true
    // }
  },
  data() {
    return {
      tabledata: [], // 这里改为小写的 tabledata
      aid: '',
      loading: true
    }
  },
  created() {
    this.initdata()
  },
  methods: {
    // 我的初始化列表数据
    initdata() {
      this.aid = this.$route.params.id
      this.loading = true // 将loading设置为true，显示加载状态
      GetUserByAction(this.aid).then(Result => {
        console.log(Result)
        this.tabledata = Result.data
      }).catch(Response => {
        console.error('这里是我的catch里面报错' + Response)
      }).finally(() => {
        this.loading = false // 确保在请求完成后将loading设置为false
      })
    },
    // 用户完成活动事件
    clickFinish(row) {
      if (row.state === 2) {
        // 如果已经是完成状态了就直接进行相应提醒
        this.$message({
          type: 'warning',
          message: '已经是完成状态了'
        })
        return
      }
      ActionFinish(this.aid, row.uid).then(result => {
        console.log(result)
        this.$message({
          type: 'success',
          message: '操作成功'
        })
      }).catch(response => {
        this.$message({
          type: 'error',
          message: '操作失败服务器发生错误'
        })
      })
      this.initdata()
    },
    // 撤销用户完成事件
    clickNoFinish(row) {
      if (row.state === 1) {
        // 如果判断这个学生已经是未完成的状态就直接提醒
        this.$message({
          type: 'warning',
          message: '已经是未完成状态'
        })
        return
      }
      ActionNoFinish(this.aid, row.uid).then(result => {
        this.$message({
          type: 'success',
          message: '操作成功'
        })
      }).catch(response => {
        this.$message({
          type: 'error',
          message: '操作失败服务器发生错误'
        })
      })
      this.initdata()
    },
    // 状态显示
    switchstate(state) {
      switch (state) {
        case 1:
          return '未完成'
        case 2:
          return '以完成'
      }
    },
    // 状态标签类别显示
    switchtypestate(state) {
      switch (state) {
        case 1:
          return 'info'
        case 2:
          return 'success'
      }
    },
    // 时间格式初始化
    inittime(time) {
      // 原始时间信息
      const originalTime = time

      // 创建日期对象
      const dateObj = new Date(originalTime)

      // 提取年月日部分
      const year = dateObj.getFullYear()
      const month = String(dateObj.getMonth() + 1).padStart(2, '0') // 月份从0开始，需要加1，然后补零
      const day = String(dateObj.getDate()).padStart(2, '0')

      // 提取小时和分钟部分
      const hours = String(dateObj.getHours()).padStart(2, '0')
      const minutes = String(dateObj.getMinutes()).padStart(2, '0')

      // 格式化为带年月日时分的字符串
      const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}`

      return formattedDateTime
    }
  }
}
</script>

  <style>
.mybox{
    padding: 10px;
}
  </style>
