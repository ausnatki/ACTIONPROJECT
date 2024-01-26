<template>
  <div class="mybox">
    <!-- 这里是我表格上面预留的位置用于搜索，查询等相关信息 -->
    <div class="top">
      <Top :addflage.sync="addFlage" />
    </div>
    <div class="content">
      <Table :editflage.sync="editFlage" :activityid.sync="activityid" />
    </div>
    <!-- 这里是我的两个弹出层的放置位置 -->
    <Add :flage.sync="addFlage" style="width: 800px;" />
    <Edit :flage.sync="editFlage" :activityid="activityid" />
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
      activityid: 1
    }
  }

}
</script>

<style scoped>
.mybox{
    padding: 10px;
}
</style>
