<template>
  <div>
    <el-table
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
      />
      <el-table-column
        prop="name"
        label="发起单位"
        width="120"
      />
      <el-table-column
        prop="name"
        label="发起人姓名"
        width="120"
      />
      <el-table-column
        prop="province"
        label="活动申请开始时间"
        width="150"
      />
      <el-table-column
        prop="city"
        label="活动申请结束时间"
        width="150"
      />
      <el-table-column
        prop="city"
        label="活动开始时间"
        width="150"
      />
      <el-table-column
        prop="zip"
        label="活动状态"
        width="120"
      />
      <el-table-column
        prop="address"
        label="活动介绍"
        width="300"
      />
      <el-table-column
        prop="zip"
        label="活动学年"
        width="120"
      />
      <el-table-column
        prop="zip"
        label="学识"
        width="120"
      />
      <el-table-column
        prop="zip"
        label="活动类别"
        width="120"
      />
      <el-table-column
        fixed="right"
        label="操作"
        width="100"
      >
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="handleClick(scope.row)">编辑</el-button>
          <el-button type="text" size="small">禁用</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
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
      tableData: [{
        id: '1',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        id: '2',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1517 弄',
        zip: 200333
      }, {
        id: '3',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1519 弄',
        zip: 200333
      }, {
        id: '4',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1516 弄',
        zip: 200333
      }],
      aid: '',
      tempEditflage: false
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
  methods: {
    // 编辑事件
    handleClick(row) {
      // row.id目前是我的活动id
      this.tempEditflage = true
      this.aid = row.id
    }
  }
}
</script>

<style>

</style>
