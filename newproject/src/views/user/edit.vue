<template>
  <div>

    <el-dialog title="学生信息" :visible.sync="dialogFormVisible">
      <div style="width: 100%;padding: 0 30px 20px 20px;">
        <!-- 这里以后要进行的操作是，在我获取信息后将loading的数据修改所以就是保留这个框架不变只是不需要这个switch了 -->
        <el-skeleton style="width: 100%" :loading="loading" animated>

          <!-- 这里是我的骨架框架 -->
          <template slot="template">
            <el-row :gutter="20">
              <!-- 左边三个小块，每个占用四分之一的宽度 -->
              <el-col :span="17">
                <!-- 左侧第一个小块 -->
                <el-skeleton-item style="height: 50px; background-color: #f0f0f0; margin:10px 0 40px 0" />
                <!-- 左侧第二个小块 -->
                <el-skeleton-item style="height: 50px; background-color: #f0f0f0; margin:0 0 40px 0" />
                <!-- 左侧第三个小块 -->
                <el-skeleton-item style="height: 50px; background-color: #f0f0f0; margin:0 0 0 0" />
              </el-col>

              <!-- 右边一个大图片块，占用三分之一的宽度 -->
              <el-col :span="7">
                <el-skeleton-item
                  variant="image"
                  style=" height: 260px;"
                />
              </el-col>
            </el-row>
            <el-row :gutter="10">
              <el-col><el-skeleton-item style="margin-top: 10px; height: 50px;" /></el-col>
            </el-row>
            <el-row>
              <el-col><el-skeleton-item style="margin-top: 40px; height: 300px;" /></el-col>
            </el-row>
          </template>

          <!-- 这里是我的实际数据显示地 -->
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

        </el-skeleton>
      </div>
    </el-dialog>

  </div>
</template>

<script>
// import Details from './components/editdetails.vue'
import { getInitTable } from '@/api/user'
export default {
  components: {
    // Details
  },
  props: {
    dialogflag: {
      type: Boolean,
      required: true
    },
    tempeditinit: {
      type: [String, Array, Object],
      required: true
    }
  },
  data() {
    return {
      dialogFormVisible: true,
      loading: true,
      currentDate: '2021-06-01',
      tableData: [{
        semester: '2021-2022 上半学期',
        aintegral: 90,
        bintegral: 80,
        cintegral: 70,
        dintegral: 100
      },
      {
        semester: '2021-2022 上半学期',
        aintegral: 90,
        bintegral: 80,
        cintegral: 70,
        dintegral: 100
      },
      {
        semester: '2021-2022 上半学期',
        aintegral: 90,
        bintegral: 80,
        cintegral: 70,
        dintegral: 100
      },
      {
        semester: '2021-2022 上半学期',
        aintegral: 90,
        bintegral: 80,
        cintegral: 70,
        dintegral: 100
      },
      {
        semester: '2021-2022 上半学期',
        aintegral: 90,
        bintegral: 100,
        cintegral: 70,
        dintegral: 100
      },
      {
        semester: '2021-2022 上半学期',
        aintegral: 90,
        bintegral: 80,
        cintegral: 70,
        dintegral: 100
      }],
      form: {
        name: '',
        sex: '',
        start: '',
        iphone: '',
        Imp: ''
      }
    }
  },
  watch: {
  // 监听子组件内部的 dialogFormVisible 变化
    dialogFormVisible(newVal) {
    // 向上传递关闭信息给父组件
      if (newVal === false) {
        console.log('这是我子组建中的修改')
        this.$emit('update:dialogflag', newVal)
      }
    },
    loading(newVal) {
      console.log('这里是在进行监听赋值')
      this.loading = newVal
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      console.log('已经开始初始化了')
      this.form.name = this.tempeditinit.name
      this.form.sex = this.tempeditinit.sex === true ? '男' : '女'
      this.form.start = this.tempeditinit.year
      this.form.iphone = this.tempeditinit.iphone
      this.form.Imp = this.tempeditinit.img
      // 表格方面的数据
      getInitTable(this.tempeditinit.uid).then(result => {
        this.tableData = result.data
      }).catch(Response => {
        console.error(Response.message)
        this.$message({
          message: '获取信息失败',
          type: 'error'
        })
        return
      })
      this.loading = false
    }
  }
}
</script>

<style></style>
