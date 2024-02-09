<template>
  <div>

    <el-dialog title="学生信息" :visible.sync="dialogFormVisible">
      <div style="width: 100%;padding: 0 30px 20px 20px;">
        <el-form ref="form" :model="form" label-width="80px">
          <el-row :gutter="10">
            <el-col :span="9">
              <el-form-item label="学生姓名">
                <el-input v-model="form.UserName" />
              </el-form-item>
            </el-col>
            <el-col :span="15">
              <el-form-item label="学生学号">
                <el-input v-model="form.Studentid" />
              </el-form-item>
            </el-col>
          </el-row>
          <el-form-item label="学生电话">
            <el-input v-model="form.PhoneNumber" />
          </el-form-item>
          <el-form-item label="学生性别">
            <el-radio v-model="form.Sex" label="1">男</el-radio>
            <el-radio v-model="form.Sex" label="2">女</el-radio>
          </el-form-item>
          <el-form-item label="添加学期">
            <el-checkbox-group v-model="checkList">
              <el-checkbox v-for="item in semesterlist" :key="item.id" :label="item.id">{{ item.name }}</el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-row :gutter="10">
            <el-col :span="9">
              <el-form-item label="行政学年">
                <el-select v-model="form.Yid" placeholder="请选择行政学年">
                  <el-option
                    v-for="item in yearlist "
                    :key="item.id"
                    :label="item.stageName"
                    :value="item.id"
                  />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="9">
              <el-form-item label="所属院系">
                <el-select v-model="form.Faculties" placeholder="请选择所属院系">
                  <el-option
                    v-for="item in faculties"
                    :key="item.value"
                    :label="item.value"
                    :value="item.value"
                  />
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-form-item label="学生照片">
            <el-upload
              class="upload-demo"
              drag
              :on-success="imgSuccess"
              action="/api/Tool/imgupload"
              multiple
            >
              <i v-if="form.Img === ''" class="el-icon-upload" />
              <el-image
                v-if="form.Img !== ''"
                style="width: 100%; height: 100%"
                :src="`/api/Tool/${form.Img}`"
                fit="fill"
              />
              <div v-if="form.Img === ''" class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="clickadd">立即创建</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-dialog>

  </div>
</template>

<script>
import { AddUser, getaddserester } from '@/api/user'

export default {
  props: {
    addflage: {
      type: Boolean,
      required: true
    },
    yearlist: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      dialogFormVisible: this.addflage,
      loading: false,
      form: {
        UserName: '', // 用户名
        Studentid: '', // 学号
        PhoneNumber: '', // 电话
        Sex: '1', // 性别
        Faculties: '', // 所属院系
        Yid: '', // 行政学年
        Img: '' // 图片
      },
      value: '',
      faculties: [{
        value: '软件学院'
      }, {
        value: '管理学院'
      }, {
        value: '土木工程学院'
      }, {
        value: '计算机网络学院'
      }],
      checkList: [],
      semesterlist: []
    }
  },
  watch: {
    // 监听子组件内部的 dialogFormVisible 变化
    dialogFormVisible(newVal) {
      // 向上传递关闭信息给父组件
      if (newVal === false) {
        this.$emit('update:addflage', newVal)
      }
    },
    addflage(newVal) {
      this.dialogFormVisible = newVal
    }
  },
  created() {
    this.getaddinti()
  },
  methods: {
    // 点击添加按钮后的操作
    clickadd() {
      AddUser(this.form, this.checkList).then(result => {
        this.$message({
          message: '添加成功',
          type: 'success'
        })
        setTimeout(() => {
          this.dialogFormVisible = false
        }, 1500)
      }).catch(Response => {
        this.$message({
          message: '添加失败',
          type: 'error'
        })
      })
    },
    // 图片放回成功后的事件
    imgSuccess(response) {
      if (response.data && response.data.imageUrl) {
        const NewImg = response.data.url
        // console.log(this.form.Img)
        this.form.Img = NewImg
        this.$set(this.form, 'Img', NewImg)
        // console.log(this.form.Img)
        this.$forceUpdate()
      }
    },
    // 获取添加用户信息
    getaddinti() {
      getaddserester().then(result => {
        console.log(result)
        this.semesterlist = result.data
      }).catch(Response => {
        this.$message({
          message: '出现错误',
          type: 'error'
        })
      })
    }
  }
}
</script>

  <style></style>
