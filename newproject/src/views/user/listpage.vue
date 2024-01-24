<template>
  <div class="mybox">
    <!-- 头部预留位置 -->
    <div class="mybox-top">
      <el-row :gutter="10">
        <el-col :xs="4" :sm="4" :md="4" :lg="5" :xl="4">
          <el-input v-model="input" placeholder="请输入学生学号查询" />
        </el-col>
        <el-col :xs="3" :sm="3" :md="3" :lg="3" :xl="3">
          <el-button type="primary">主要按钮</el-button>
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
  </div>
</template>

<script>
import userTable from './components/list.vue'
export default {
  name: 'ListPage',
  components: {
    userTable
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
      value: ''
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
