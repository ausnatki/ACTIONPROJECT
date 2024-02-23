<template>
  <div>
    <el-table
      v-loading="loading"
      :data="tableData"
      border
      style="width: 100%"
    >
      <el-table-column
        fixed
        prop="id"
        label="编号"
        sortable
        width="75"
      >
        <template slot-scope="scope">
          {{ scope.$index+1 }}
        </template>
      </el-table-column>
      <el-table-column
        prop="initiatingUnit"
        label="发起单位"
        width="120"
      />
      <el-table-column
        prop="organizerName"
        label="发起人姓名"
        width="120"
      />
      <el-table-column
        prop="activityAppStartTime"
        label="活动申请开始时间"
        width="160"
      >
        <template slot-scope="scope">
          {{ scope.row.activityAppStartTime.replace('T',' ') }}
        </template>
      </el-table-column>
      <el-table-column
        prop="activityAppEndTime"
        label="活动申请结束时间"
        width="160"
      >
        <template slot-scope="scope">
          {{ scope.row.activityAppEndTime.replace('T',' ') }}
        </template>
      </el-table-column>
      <el-table-column
        prop="activityStartTime"
        label="活动开始时间"
        width="160"
      >
        <template slot-scope="scope">
          {{ scope.row.activityStartTime.replace('T',' ') }}
        </template>
      </el-table-column>

      <el-table-column
        prop="zip"
        label="活动状态"
        width="120"
      >
        <template slot-scope="scope">
          <el-tag
            :type="actionStateType(scope.row)"
            effect="dark"
          >
            {{ actionStateText(scope.row) }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column
        prop="eventDescription"
        label="活动介绍"
        width="300"
        show-overflow-tooltip="true"
      />
      <el-table-column
        prop="academicYear"
        label="活动学年"
        width="120"
      />
      <el-table-column
        prop="durationHours"
        label="学时"
        width="120"
      />
      <el-table-column
        prop="activityType"
        label="活动类别"
        width="120"
      />
      <el-table-column
        fixed="right"
        label="操作"
        width="100"
      >
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="handleClick(scope.$index,scope.row)">编辑</el-button>
          <el-button type="text" size="small">禁用</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getallaction } from '@/api/action'
export default {
  props: {
    editflage: {
      type: Boolean,
      required: true
    },
    activityid: {
      type: [Number, String],
      required: true
    }
  },
  data() {
    return {
      tableData: [],
      initdata: [],
      aid: '',
      tempEditflage: false,
      loading: true
    }
  },
  watch: {
    tempEditflage(newVal) {
      this.$emit('update:editflage', newVal)
    },
    aid(newVal) {
      this.$emit('update:activityid', newVal)
    },
    editflage(newVal) {
      this.tempEditflage = newVal
    }
  },
  mounted() {
    this.initTable()
  },
  methods: {
    // 编辑事件
    handleClick(index, row) {
      // row.id目前是我的活动id
      this.tempEditflage = true
      this.aid = row.id
      this.$emit('transmit', this.initdata[index])
    },
    // 初始化表格事件
    initTable() {
      getallaction().then(result => {
        console.log(result)
        this.tableData = result.list.map(function(item) {
          return item.c
        })
        this.initdata = result.list
      }).catch(Response => {
        console.log('初始化失败')
        console.log(Response)
        return
      })
      this.loading = false
    },
    // 活动状态 标签样式确定
    actionStateType(row) {
      let flag = 0
      const nowTime = new Date()
      const appStartTime = new Date(row.activityAppStartTime)
      const appEndTime = new Date(row.activityAppEndTime)
      const activityEndTime = new Date(row.activityEndTime)

      // 活动未开始申请时的判断
      if (nowTime < appStartTime) flag = 1

      // 活动申请开始但未结束时候的判断
      if (nowTime > appStartTime && nowTime < appEndTime) {
        flag = 2
      }

      // 活动开始但未结束时候的判断
      if (nowTime > appEndTime && nowTime < activityEndTime) {
        flag = 3
      }

      // 活动结束时候的判断
      if (nowTime > activityEndTime) {
        flag = 4
      }

      // 返回相应的状态
      switch (flag) {
        case 0:
          return 'warning'
        case 1:
          return 'info'
        case 2:
          return ''
        case 3:
          return 'success'
        case 4:
          return 'danger'
      }
    },
    // 活动状态 文本确定
    actionStateText(row) {
      let flag = 0
      const nowTime = new Date()
      const appStartTime = new Date(row.activityAppStartTime)
      const appEndTime = new Date(row.activityAppEndTime)
      const activityEndTime = new Date(row.activityEndTime)

      // 活动未开始申请时的判断
      if (nowTime < appStartTime) flag = 1

      // 活动申请开始但未结束时候的判断
      if (nowTime > appStartTime && nowTime < appEndTime) {
        flag = 2
      }

      // 活动开始但未结束时候的判断
      if (nowTime > appEndTime && nowTime < activityEndTime) {
        flag = 3
      }

      // 活动结束时候的判断
      if (nowTime > activityEndTime) {
        flag = 4
      }

      // 0:未知 1：活动申请未开时 2：活动申请开始但未结束
      // 3:活动开始但没有结束 4：活动结束
      switch (flag) {
        case 0:
          return '未知状态'
        case 1 :
          return '即将开启'
        case 2 :
          return '活动报名'
        case 3:
          return '活动开始'
        case 4:
          return '活动结束'
      }
    }
  }
}
</script>

<style>

</style>
