<template>
  <div>
    <el-dialog title="收货地址" :visible.sync="dialogFormVisible" width="70%">
      <el-form :model="form" label-position="top" label-width="120px">
        <el-upload
          class="upload-demo custom-upload-dragger"
          drag
          :on-success="imgSuccess"
          action="/api/Tool/imgupload"
          multiple
        >
          <i v-if="form.EventImages === ''" class="el-icon-upload" />
          <el-image
            v-if="form.EventImages !== ''"
            style="width: 100%; height: 100%"
            :src="`/api/Tool/${form.EventImages}`"
            fit="fill"
          />
          <div v-if="form.EventImages === ''" class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
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
        <el-form-item label="面向年级">
          <el-checkbox-group v-model="form.TargetedGrade">
            <el-checkbox v-for="item in yearlist" :key="item.id" :label="item.id" :checked="isGradeSelected(item.id)">{{ item.stageName }}</el-checkbox>
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
            <!-- <el-checkbox label="软件学院" />
            <el-checkbox label="管理学院" />
            <el-checkbox label="土木工程学院" />
            <el-checkbox label="互联网学院" /> -->
            <el-checkbox v-for="college in colleges" :key="college.name" :label="college.name" :checked="isSelected(college.name)">{{ college.name }}</el-checkbox>

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
              <el-input-number v-model="form.RecruitmentNumber" controls-position="right" :min="0" />
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
          <el-button type="primary" @click="clickedit()">确定</el-button>
          <el-button @click="resetForm">重置</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { getInitadd, EditAction } from '@/api/action'
import { mapGetters } from 'vuex'
export default {
  props: {
    flage: {
      type: Boolean,
      required: true
    },
    activityid: {
      type: [Number, String],
      required: true
    },
    initdata: {
      type: [String, Array, Object],
      required: true
    }
  },
  data() {
    return {
      dialogFormVisible: false,
      // 这个临时数据是用来存储初始化数据的
      form: {
        RecruitmentNumber: '', // 活动人数，
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
      yearlist: {},
      colleges: [
        { 'name': '软件学院' },
        { 'name': '管理学院' },
        { 'name': '土木工程学院' },
        { 'name': '互联网学院' }
      ],
      formLabelWidth: '120px'
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
      // console.log('这是我的子组件重新加载')
      // this.$forceUpdate()
      if (newVal === false) {
        this.$emit('update:flage', newVal)
      }
    },
    flage(newVal) {
      this.dialogFormVisible = newVal
    },
    initdata(newVal) {
      this.init()
    }
  },
  mounted() {
    // this.init()
  },
  methods: {
    // 重置
    resetForm() {
      this.getInitaddinit()
    },
    onSubmit() {
      console.log('submit!')
    },
    init() {
      console.log('这里是我的初始化initdata数据事件')
      // 首先要进行界面相关数据的初始化
      getInitadd(this.uid).then(result => {
        // console.log(result)
        this.yearlist = result.list[0].yearlist
      }).catch(response => {
        this.$message({
          message: '初始化数据失败',
          type: 'error'
        })
        return
      }).finally(() => {
        // 设置面向年级的多选框选中状态
        if (this.initdata.yearlist) {
          this.form.TargetedGrade = this.initdata.yearlist.map(grade => grade.yid)
        }

        // 设置面向学院的多选框选中状态
        if (this.initdata.academylist) {
          this.form.TargetedCollege = this.initdata.academylist.map(college => college.name)
        }
      })

      // GetEditInit(this.uid)
      this.form.Id = this.activityid
      this.form.ActivityName = this.initdata.c.activityName
      this.form.ActivityType = this.initdata.c.activityType
      this.form.OrganizerPhoneNumber = this.initdata.c.organizerPhoneNumber
      this.form.OrganizerEmployeeID = this.initdata.c.organizerEmployeeID
      this.form.OrganizerName = this.initdata.c.organizerName
      this.form.InitiatingUnit = this.initdata.c.initiatingUnit
      this.form.TargetedGrade = []
      this.form.IsClubActivity = this.initdata.c.isClubActivity
      this.form.TargetedCollege = []
      this.form.ActivityAppStartTime = this.initdata.c.activityAppStartTime
      this.form.ActivityAppEndTime = this.initdata.c.activityAppEndTime
      this.form.ActivityStartTime = this.initdata.c.activityStartTime
      this.form.ActivityEndTime = this.initdata.c.activityEndTime
      this.form.ActivityCycle = this.initdata.c.activityCycle
      this.form.AcademicYear = this.initdata.c.academicYear
      this.form.AcademicSemester = this.initdata.c.academicSemester
      this.form.DurationHours = this.initdata.c.durationHours
      this.form.VideoLink = this.initdata.c.videoLink
      this.form.TargetedAudience = this.initdata.c.targetedAudience
      this.form.EventLocation = this.initdata.c.eventLocation
      this.form.EventDescription = this.initdata.c.eventDescription
      this.form.Notes = this.initdata.c.notes
      this.form.EventImages = this.initdata.c.eventImages
      this.form.Createtime = this.initdata.c.createtime
      this.form.RecruitmentNumber = this.initdata.c.recruitmentNumber
    },
    imgSuccess(response) {
      console.log(response)
      this.form.EventImages = response.data.url
    },
    // 年份多选框的判断
    isGradeSelected(yearId) {
    // 检查年份列表中的年份是否在年级列表中存在，如果存在则返回 true，否则返回 false
      if (this.initdata.yearlist) {
        return this.initdata.yearlist.some(grade => grade.yid === yearId)
      }
    },
    // 面像群体的多选框判断
    isSelected(collegeName) {
    // 检查给定的学院名称是否在给定的默认选中数据中存在，如果存在则返回 true，否则返回 false
      if (this.initdata.academylist) {
        return this.initdata.academylist.some(grade => grade.name === collegeName)
      }
    },
    clickedit() {
      EditAction(this.form).then(() => {
        this.$message({
          type: 'success',
          message: '修改成功'
        })
      }).catch(response => {
        this.$message({
          type: 'error',
          message: '服务器错误，修改失败'
        })
      })
    }
  }
}
</script>

  <style scoped>
.el-upload-dragger {
  /* Override styles locally */
  width: 540%;
  /* other styles */
}
  </style>

