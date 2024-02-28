<template>
  <div class="mybox">
    <!-- 这里是我表格上面预留的位置用于搜索，查询等相关信息 -->
    <div class="top">
      <Top :addflage.sync="addFlage" @send-data="receiveDataFromChild" />
    </div>
    <div class="content">
      <Table :serchdate="searchData" :editflage.sync="editFlage" :activityid.sync="activityid" @transmit="geteditdata" />
    </div>
    <!-- 这里是我的两个弹出层的放置位置 -->
    <Add :flage.sync="addFlage" style="width: 800px;" />
    <Edit :key="componentKey" :flage.sync="editFlage" :activityid="activityid" :initdata="initdata" />

  </div>
</template>

<script>
import Table from './components/mainTable.vue'
import Top from './components/topTable.vue'
import Add from './components/add.vue'
import Edit from './components/edit.vue'
export default {
  components: {
    Table,
    Top,
    Add,
    Edit
  },
  data() {
    return {
      addFlage: false,
      editFlage: false,
      activityid: 1,
      searchData: {
        serchname: '',
        serchtype: '',
        serchyear: '',
        serchin: ''
      },
      initdata: '',
      componentKey: 0
    }
  },
  methods: {
    geteditdata(data) {
      console.log('进入初始化赋值阶段')
      this.initdata = data
    },
    receiveDataFromChild(data) {
      // 接收子组件传递的数据
      console.log('这是我的子组件传入来的数据' + data)
      this.searchData = data
      console.log(this.searchData) // 可以在控制台中查看传递过来的数据
    },
    reloadComponent() {
      this.componentKey += 1 // 修改 key 以触发组件重新加载
    }
  }

}
</script>

<style scoped>
.mybox{
    padding: 10px;
}
</style>
