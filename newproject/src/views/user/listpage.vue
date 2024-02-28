<template>
  <div class="mybox">
    <!-- 头部预留位置 -->
    <div class="mybox-top">
      <el-row :gutter="10">
        <el-col :xs="4" :sm="4" :md="4" :lg="5" :xl="4">
          <el-input v-model="serchid" placeholder="请输入学生学号查询" />
        </el-col>
        <el-col :xs="2" :sm="2" :md="2" :lg="2" :xl="2">
          <el-button type="primary">搜索</el-button>
        </el-col>
        <el-col :xs="3" :sm="3" :md="3" :lg="3" :xl="3">
          <el-button type="success" icon="el-icon-edit" @click="onadd">添加用户</el-button>
        </el-col>
        <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">
          <el-select v-model="serchyear" placeholder="筛选入学年份">
            <el-option label="请选择年份" value="" />
            <el-option
              v-for="item in options"
              :key="item.stageName"
              :label="item.stageName"
              :value="item.stageName"
            />
          </el-select>
        </el-col>
      </el-row>
    </div>
    <!-- 中间表格位置 -->
    <div>
      <userTable :serchyear="serchyear" :serchid="serchid" />
    </div>

    <!-- 我的用户添加弹出层 -->
    <addUser :addflage.sync="addflage" :yearlist="options" />
  </div>
</template>

<script>
import { addInit } from '@/api/user'
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
      options: [],
      serchyear: '',
      addflage: false,
      serchid: ''
    }
  },
  created() {
    this.getinit()
  },
  methods: {
    onadd() {
      this.addflage = true
    },
    // 获取一些初始化数据
    getinit() {
      console.log('这里是我的初始化操作')
      addInit().then(result => {
        // console.log(result)
        const filteredResults = result.data
          .map(e => {
            return e
          })
          .filter(e => e.state !== false)

        this.options = filteredResults
      }).catch(error => {
        console.log(error)
      })
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
