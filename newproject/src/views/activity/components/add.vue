<template>
  <div>
    <el-dialog title="收货地址" :visible.sync="dialogFormVisible" width="70%">
      <el-form :model="form" label-position="top" label-width="120px">
        <el-row :gutter="24">
          <el-col :span="12">
            <el-form-item label="活动名称">
              <el-input v-model="form.activityName" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="活动属性（活动类别）">
              <el-select v-model="form.activityType" placeholder="请选择">
                <!-- 在这里添加下拉框选项 -->
                <el-option label="选项1" value="option1" />
                <el-option label="选项2" value="option2" />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :gutter="24">
          <el-col :span="8">
            <el-form-item label="发起者电话">
              <el-input v-model="form.initiatorPhone" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="发起者学工号">
              <el-input v-model="form.initiatorID" disabled />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="发起者姓名">
              <el-input v-model="form.initiatorName" disabled />
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :gutter="24">

          <el-col :span="12">
            <el-form-item label="发起单位（学院）">
              <el-input v-model="form.initiatorDepartment" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="视频连接">
              <el-input v-model="form.videoLink" />
            </el-form-item>
          </el-col>
        </el-row>

        <el-form-item label="活动图片">
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
          >
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
          <el-checkbox-group v-model="form.type">
            <el-checkbox label="美食/餐厅线上活动" name="type" />
            <el-checkbox label="地推活动" name="type" />
            <el-checkbox label="线下主题活动" name="type" />
            <el-checkbox label="单纯品牌曝光" name="type" />
          </el-checkbox-group>
        </el-form-item>

        <el-form-item label="是否为社团活动">
          <el-radio-group v-model="form.isClubActivity">
            <el-radio label="是" />
            <el-radio label="否" />
          </el-radio-group>
        </el-form-item>

        <el-form-item label="面向对象">
          <el-checkbox-group v-model="form.type">
            <el-checkbox label="美食/餐厅线上活动" name="type" />
            <el-checkbox label="地推活动" name="type" />
            <el-checkbox label="线下主题活动" name="type" />
            <el-checkbox label="单纯品牌曝光" name="type" />
          </el-checkbox-group>
        </el-form-item>

        <el-row :gutter="24">
          <el-col :span="6">
            <el-form-item label="活动申请开始时间">
              <el-date-picker v-model="form.applicationStartDate" type="datetime" />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="活动申请结束时间">
              <el-date-picker v-model="form.applicationEndDate" type="datetime" />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="活动开始时间">
              <el-date-picker v-model="form.activityStartDate" type="datetime" />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="活动结束时间">
              <el-date-picker v-model="form.activityEndDate" type="datetime" />
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
              <el-input-number v-model="form.studyHours" controls-position="right" :min="0" />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="活动期数">
              <el-input-number v-model="form.activityPeriods" controls-position="right" :min="0" />
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :gutter="24">
          <el-col :span="6">
            <el-form-item label="活动学年">
              <el-select v-model="form.activityAcademicYear" placeholder="请选择">
                <!-- 在这里添加下拉框选项 -->
                <el-option label="2022-2023" value="2022-2023" />
                <el-option label="2023-2024" value="2023-2024" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="活动学期">
              <el-select v-model="form.activitySemester" placeholder="请选择">
                <!-- 在这里添加下拉框选项 -->
                <el-option label="第一学期" value="第一学期" />
                <el-option label="第二学期" value="第二学期" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="面向群体">
              <el-select v-model="form.targetGroup" placeholder="请选择">
                <!-- 在这里添加下拉框选项 -->
                <el-option label="群体1" value="group1" />
                <el-option label="群体2" value="group2" />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :gutter="24">

          <el-col :span="12">
            <el-form-item label="活动地点">
              <el-input v-model="form.activityLocation" type="textarea" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="活动介绍">
              <el-input v-model="form.activityIntroduction" type="textarea" />
            </el-form-item>
          </el-col>
        </el-row>

        <el-form-item label="注意事项">
          <el-input v-model="form.notes" type="textarea" />
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm">提交</el-button>
          <el-button @click="resetForm">重置</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
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

      },
      dialogImageUrl: '',
      dialogVisible: false,
      disabled: false,
      formLabelWidth: '120px'
    }
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
  methods: {
    onSubmit() {
      console.log('submit!')
    },
    handleRemove(file) {
      console.log(file)
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    handleDownload(file) {
      console.log(file)
    }
  }
}
</script>

    <style>

    </style>

