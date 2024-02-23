<template>
  <div>
    <el-dialog title="收货地址" :visible.sync="dialogFormVisible" width="70%">
      <el-form :model="form" label-position="top" label-width="120px">
        <el-row :gutter="24">
          <el-col :span="12">
            <el-form-item label="活动名称">
              <el-input v-model="form.ActivityName" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="活动属性（活动类别）">
              <el-select v-model="form.ActivityType" placeholder="请选择">
                <!-- 在这里添加下拉框选项 -->
                <el-option label="A类活动" value="A" />
                <el-option label="B类活动" value="B" />
                <el-option label="C类活动" value="C" />
                <el-option label="D类活动" value="D" />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :gutter="24">
          <el-col :span="8">
            <el-form-item label="发起者电话">
              <el-input v-model="form.OrganizerPhoneNumber" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="发起者学工号">
              <el-input v-model="form.OrganizerEmployeeID" disabled />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="发起者姓名">
              <el-input v-model="form.OrganizerName" disabled />
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :gutter="24">

          <el-col :span="12">
            <el-form-item label="发起单位（学院）">
              <el-input v-model="form.InitiatingUnit" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="视频连接">
              <el-input v-model="form.VideoLink" />
            </el-form-item>
          </el-col>
        </el-row>

        <el-form-item label="活动图片">
          <el-upload
            action="/api/Tool/imgupload"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
            :on-success="imgafter"
          >
            <!-- 这里是启用多张图片的效果如果需要就将这个复制到上面就行   :multiple="true"-->
            <i class="el-icon-plus" />
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog>
        </el-form-item>
        <el-form-item label="面向年级">
          <el-checkbox-group v-model="form.TargetedGrade">
            <el-checkbox v-for="item in yearlist" :key="item.id" :label="item.id">{{ item.stageName }}</el-checkbox>
          </el-checkbox-group>
        </el-form-item>

        <el-form-item label="是否为社团活动">
          <el-radio-group v-model="form.IsClubActivity">
            <el-radio :label="true">是</el-radio>
            <el-radio :label="false">否</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="面向对象">
          <el-checkbox-group v-model="form.TargetedCollege">
            <el-checkbox label="软件学院" />
            <el-checkbox label="管理学院" />
            <el-checkbox label="土木工程学院" />
            <el-checkbox label="互联网学院" />
          </el-checkbox-group>
        </el-form-item>

        <el-row :gutter="24">
          <el-col :span="6">
            <el-form-item label="活动申请开始时间">
              <el-date-picker v-model="form.ActivityAppStartTime" type="datetime" />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="活动申请结束时间">
              <el-date-picker v-model="form.ActivityAppEndTime" type="datetime" />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="活动开始时间">
              <el-date-picker v-model="form.ActivityStartTime" type="datetime" />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="活动结束时间">
              <el-date-picker v-model="form.ActivityEndTime" type="datetime" />
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :gutter="24">
          <el-col :span="6">
            <el-form-item label="招募人数">
              <el-input-number v-model="form.recruitmentNumber" controls-position="right" :min="0" />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="学时">
              <el-input-number v-model="form.DurationHours" controls-position="right" :min="0" />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="活动期数">
              <el-input-number v-model="form.ActivityCycle" controls-position="right" :min="0" />
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :gutter="24">
          <el-col :span="6">
            <el-form-item label="活动学年">
              <el-select v-model="form.AcademicYear" placeholder="请选择">
                <!-- 在这里添加下拉框选项 -->
                <el-option v-for="item in yearlist" :key="item.id" :label="item.stageName" :value="item.id" />

              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="活动学期">
              <el-select v-model="form.AcademicSemester" placeholder="请选择">
                <!-- 在这里添加下拉框选项 -->
                <el-option label="第一学期" :value="1" />
                <el-option label="第二学期" :value="2" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="面向群体">
              <el-select v-model="form.TargetedAudience" placeholder="请选择">
                <!-- 在这里添加下拉框选项 -->
                <el-option label="不限" value="不限" />
                <el-option label="学生" value="学生" />
                <el-option label="教师" value="教师" />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :gutter="24">

          <el-col :span="12">
            <el-form-item label="活动地点">
              <el-input v-model="form.EventLocation" type="textarea" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="活动介绍">
              <el-input v-model="form.EventDescription" type="textarea" />
            </el-form-item>
          </el-col>
        </el-row>

        <el-form-item label="注意事项">
          <el-input v-model="form.Notes" type="textarea" />
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="clickadd">确定</el-button>
          <el-button @click="resetForm">重置</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { getInitadd, addAction } from '@/api/action'
import { mapGetters } from 'vuex'
export default {
  props: {
    flage: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      dialogFormVisible: false,
      form: {
        ActivityName: '', // 活动名称
        ActivityType: '', // 活动属性
        OrganizerPhoneNumber: '', // 发起者电话
        OrganizerEmployeeID: '', // 发起者学工号
        OrganizerName: '', // 发起者姓名
        InitiatingUnit: '', // 发起单位
        TargetedGrade: [], // 面向年级
        IsClubActivity: false, // 是否为社团活动，默认为false
        TargetedCollege: [], // 面向学院
        ActivityAppStartTime: new Date(), // 活动申请开始时间，默认为当前时间
        ActivityAppEndTime: new Date(), // 活动申请结束时间，默认为当前时间
        ActivityStartTime: '', // 活动开始时间，默认为当前时间
        ActivityEndTime: '', // 活动结束时间，默认为当前时间
        ActivityCycle: '', // 活动期数，默认为0表示未设置
        AcademicYear: '', // 活动学年，默认为0表示未设置
        AcademicSemester: '', // 活动学期，默认为0表示未设置
        DurationHours: '', // 学时，默认为0表示未设置
        VideoLink: '', // 视频连接
        TargetedAudience: '', // 面向群体
        EventLocation: '', // 活动地点
        EventDescription: '', // 活动介绍
        Notes: '', // 注意事项
        EventImages: '', // 活动图片
        Createtime: new Date() // 创建时间，默认为当前时间
      },
      // 这个临时数据是用来存储初始化数据的
      tempform: {
        ActivityName: '', // 活动名称
        ActivityType: '', // 活动属性
        OrganizerPhoneNumber: '', // 发起者电话
        OrganizerEmployeeID: '', // 发起者学工号
        OrganizerName: '', // 发起者姓名
        InitiatingUnit: '', // 发起单位
        TargetedGrade: [], // 面向年级
        IsClubActivity: false, // 是否为社团活动，默认为false
        TargetedCollege: [], // 面向学院
        ActivityAppStartTime: new Date(), // 活动申请开始时间，默认为当前时间
        ActivityAppEndTime: new Date(), // 活动申请结束时间，默认为当前时间
        ActivityStartTime: '', // 活动开始时间，默认为当前时间
        ActivityEndTime: '', // 活动结束时间，默认为当前时间
        ActivityCycle: '', // 活动期数，默认为0表示未设置
        AcademicYear: '', // 活动学年，默认为0表示未设置
        AcademicSemester: '', // 活动学期，默认为0表示未设置
        DurationHours: '', // 学时，默认为0表示未设置
        VideoLink: '', // 视频连接
        TargetedAudience: '', // 面向群体
        EventLocation: '', // 活动地点
        EventDescription: '', // 活动介绍
        Notes: '', // 注意事项
        EventImages: '', // 活动图片
        Createtime: new Date() // 创建时间，默认为当前时间
      },
      dialogImageUrl: '',
      dialogVisible: false,
      disabled: false,
      formLabelWidth: '120px',
      yearlist: []
    }
  },
  computed: {
    ...mapGetters([
      'name',
      'uid'
    ])
  },
  watch: {
    // 监听子组件内部的 dialogFormVisible 变化
    dialogFormVisible(newVal) {
      // 向上传递关闭信息给父组件
      if (newVal === false) {
        console.log('这是我子组建中的修改')
        this.$emit('update:flage', newVal)
      }
    },
    flage(newVal) {
      this.dialogFormVisible = newVal
    }
  },
  created() {
    this.Getinit()
  },
  methods: {
    // 图片删除事件
    handleRemove(file) {
      this.form.EventImages = ''
    },
    handlePictureCardPreview(file) {
      console.log('这里是我的图片上传功能')
      console.log(file)
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    handleDownload(file) {
      console.log(file)
    },
    // 获取我添加时候的初始化信息
    Getinit() {
      // console.log(this.uid)
      // console.log('成功进入初始化事件')
      getInitadd(this.uid).then(result => {
        console.log(result)
        this.form.OrganizerEmployeeID = result.list[0].people.code
        this.form.OrganizerName = result.list[0].people.name
        this.yearlist = result.list[0].yearlist
      }).catch(Response => {
        this.$message({
          message: '初始化数据失败',
          type: 'error'
        })
      })
    },
    // 点击添加后的事件
    clickadd() {
      // 预处一些数据
      this.form.Createtime = new Date()

      addAction(this.form).then(result => {
        this.$message({
          message: '添加成功',
          type: 'success'
        }).catch(Response => {
          console.error(Response.message)
          this.$message({
            message: '服务器发生错误，创建失败',
            type: 'error'
          })
        })
      })

      setTimeout(() => {
        this.dialogFormVisible = false
      }, 1000)
      // 添加完毕后关闭弹出层并且充值表格数据
    },
    // 上传文件之后
    imgafter(Response) {
      console.log('这里是上传文件后的事件')
      this.form.EventImages = Response.data.url
    },
    // 重置表单信息
    resetForm() {
      console.log('这里是重置表单事件')
      this.form = this.tempform
    }
  }
}
</script>

    <style>

    </style>

