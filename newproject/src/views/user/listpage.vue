<template>
  <div class="mybox">
    <!-- 头部预留位置 -->
    <div class="mybox-top">
      <el-row :gutter="10">
        <el-col :xs="4" :sm="4" :md="4" :lg="5" :xl="4">
          <el-input v-model="input" placeholder="请输入学生学号查询" />
        </el-col>
        <el-col :xs="2" :sm="2" :md="2" :lg="2" :xl="2">
          <el-button type="primary">搜索</el-button>
        </el-col>
        <el-col :xs="3" :sm="3" :md="3" :lg="3" :xl="3">
          <el-button type="success" icon="el-icon-edit" @click="onadd">添加用户</el-button>
        </el-col>
        <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">
          <el-select v-model="value" placeholder="筛选入学年份">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-col>
      </el-row>
    </div>
    <!-- 中间表格位置 -->
    <div>
      <userTable />
    </div>

    <!-- 我的用户添加弹出层 -->
    <addUser :addflage.sync="addflage" />
  </div>
</template>

<script>
import userTable from './components/list.vue'
import addUser from './components/adduser.vue'
export default {
  name: 'ListPage',
  components: {
    userTable,
    addUser
  },
  data() {
    return {
      input: '',
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: '',
      addflage: false
    }
  },
  methods: {
    onadd() {
      this.addflage = true
    }
  }
}
</script>

<style scoped>
.mybox{
    padding: 10px;
}
.mybox-top{
    margin: 0 0 10px 0;
}
</style>
