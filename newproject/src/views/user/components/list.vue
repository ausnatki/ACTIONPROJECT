<template>
  <div>
    <el-table
      v-loading="loading"
      :data="tableData"
      border
      style="width: 100%"
    >
      <el-table-column
        label="编号"
        sortable
        prop="uid"
        width="80"
      >
        <template slot-scope="scope">
          {{ scope.$index+1 }}
        </template>
      </el-table-column>
      <el-table-column
        prop="studeid"
        label="学生学号"
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
        prop="faculties"
        label="所属院系"
      />
      <el-table-column
        prop="sex"
        label="学生性别"
      >
        <template slot-scope="scope">
          <!-- {{ scope.row.sex===true?'男':'女' }} -->
          <el-tag :type="scope.row.sex === true ? '' : 'danger'">{{ scope.row.sex===true?'男':'女' }}</el-tag>

        </template>
      </el-table-column>
      <el-table-column
        label="状态"
      >
        <template slot-scope="scope">
          <el-tag :type="switchtype(scope.row)">{{ switchcontent(scope.row) }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        prop="year"
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
      :tempeditinit="tempeditinit"
    />
  </div>
</template>

<script>
import { getall } from '@/api/user'
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
      tableData: [],
      loading: true,
      tempeditinit: ''// 这里的东西指的是我传入编辑时的数据
    }
  },
  created() {
    this.initlist()
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row)
      this.tempeditinit = row
      this.tempuser = row.id
      this.flagerc = true
    },
    handleDelete(index, row) {
      console.log(index, row)
    },
    switchtype(row) {
      switch (row.state) {
        case true:
          return 'success'
        case false:
          return 'danger'
        default:
          return 'info'
      }
    },
    switchcontent(row) {
      switch (row.state) {
        case true:
          return '正常状态'
        case false:
          return '禁用状态'
        default:
          return '位置状态'
      }
    },
    // 获取列表信息
    initlist() {
      getall().then(result => {
        console.log(result)
        this.tableData = result.data
        this.loading = false
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>
