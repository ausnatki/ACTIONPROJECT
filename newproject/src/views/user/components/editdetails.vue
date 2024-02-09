<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-row :gutter="20">
        <!-- 左边三个小块，每个占用四分之一的宽度 -->
        <el-col :span="16">
          <!-- 左侧第一个小块 -->
          <div style="height: 50px;  margin:20px 0 40px 0;">
            <el-form-item label="学生姓名">
              <el-input v-model="form.name" />
            </el-form-item>
          </div>
          <!-- 左侧第二个小块 -->
          <div style="height: 50px;  margin:0 0 40px 0">
            <el-form-item label="学生性别">
              <el-input v-model="form.sex" />
            </el-form-item>
          </div>
          <!-- 左侧第三个小块 -->
          <div style="height: 50px;  margin:0 0 0 0">
            <el-form-item label="行政年纪">
              <el-input v-model="form.start" />
            </el-form-item>
          </div>
        </el-col>

        <!-- 右边一个大图片块，占用三分之一的宽度 -->
        <el-col :span="7">
          <img
            :src="`/api/Tool/${form.Imp}`"
            class="image"
            style="width: 100%;height: 260px;"
          >
        </el-col>
      </el-row>

      <el-row :gutter="10">
        <el-col>
          <div style="margin-top: 20px; height: 50px;">
            <el-form-item label="联系电话">
              <el-input v-model="form.iphone" />
            </el-form-item>
          </div>
        </el-col>
      </el-row>

      <!-- 这里是我的表格部分 -->
      <el-row>
        <el-col>
          <el-table
            :data="tableData"
            height="300px"
            border
            style="width: 100%;margin-top: 40px;"
          >
            <el-table-column
              prop="semester"
              label="学期"
              width="180"
            />
            <el-table-column
              prop="aintegral"
              label="A类"
              sortable
            />
            <el-table-column
              prop="bintegral"
              label="B类"
              sortable
            />
            <el-table-column
              prop="cintegral"
              label="C类"
              sortable
            />
            <el-table-column
              prop="dintegral"
              label="D类"
              sortable
            />
            <el-table-column
              prop="name"
              label="总和"
              sortable
            >
              <template slot-scope="scope">
                {{ scope.row.aintegral*0.3+scope.row.bintegral*0.3+scope.row.cintegral*0.3+scope.row.dintegral*0.1 }}
              </template>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>

      <el-row :gutter="10" style="margin-top: 15px;">
        <el-col :span="4"><el-button type="primary">确认修改</el-button></el-col>

        <el-col :span="4"><el-button type="danger">取消</el-button></el-col>
      </el-row>

    </el-form>
  </div>
</template>

<script>
// import { fromTextArea } from 'codemirror'
import { getInitTable } from '@/api/user'

export default {
  name: 'Details',
  props: {
    initdata: {
      type: [String, Array, Object],
      required: true
    },
    loadding: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      tableData: [],
      form: {
        name: this.initdata.name,
        sex: this.initdata.sex === true ? '男' : '女',
        start: this.initdata.year,
        iphone: this.initdata.iphone,
        Imp: this.initdata.img
      }
    }
  },
  watch: {
    initdata(newVal) {
      this.name = newVal.name
      this.sex = newVal.sex === true ? '男' : '女'
      this.start = newVal.start
      this.iphone = this.initdata.iphone
      this.Imp = this.initdata.img
    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      console.log('已经开始初始化了')

      getInitTable(this.initdata.uid).then()

      this.name = this.initdata.name
      this.sex = this.initdata.sex
      this.start = this.initdata.start
      this.iphone = this.initdata.iphone
      this.Imp = this.initdata.img
      this.$emit('update:loadding', false)
    }
  }
}
</script>

<style>

</style>
