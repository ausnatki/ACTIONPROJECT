<template>
  <div>
    <el-table
      :data="tableData"
      border
      style="width: 100%"
    >
      <el-table-column
        prop="id"
        label="编号"
        sortable
        width="80"
      />
      <el-table-column
        prop="user"
        label="用户名"
      />
      <el-table-column
        prop="name"
        label="学生姓名"
      />
      <el-table-column
        prop="iphone"
        label="联系电话"
      />
      <el-table-column
        prop="college"
        label="所属院系"
      />
      <el-table-column
        prop="startTime"
        label="入学年份"
      />
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="primary"
            plain
            @click="handleEdit(scope.$index, scope.row)"
          >编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            plain
            @click="handleDelete(scope.$index, scope.row)"
          >禁用</el-button>
        </template>
      </el-table-column>
    </el-table>
    <edit
      v-if="flagerc"
      :dialogflag.sync="flagerc"
      :userid="tempuser"
    />
  </div>
</template>

<script>
import edit from '@/views/user/edit.vue'
export default {
  name: 'UserTable',
  components: {
    edit
  },
  data() {
    return {
      flagerc: false, // 这个标志是管理比赛的
      tempuser: 1,
      tableData: [{
        id: 1,
        user: '219970306',
        name: '帅小伙',
        college: '软件学院',
        iphone: '18581348911',
        startTime: '2021'
      },
      {
        id: 2,
        user: '219970306',
        name: '帅小伙',
        college: '建筑学院',
        iphone: '18581348911',
        startTime: '2021'
      },
      {
        id: 3,
        user: '219970306',
        name: '帅小伙',
        college: '通信学院',
        iphone: '18581348911',
        startTime: '2021'
      }]
    }
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row)
      this.tempuser = row.id
      this.flagerc = true
    },
    handleDelete(index, row) {
      console.log(index, row)
    }
  }
}
</script>
