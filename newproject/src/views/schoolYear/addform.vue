<template>
  <div class="mybox">
    <el-page-header content="添加学年" style="margin-bottom: 15px;" @back="goBack" />
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="学年名称">
        <el-input v-model="form.StageName" />
      </el-form-item>
      <el-form-item label="学年状态">
        <el-switch v-model="form.State" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="clickAdd()">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { AddYear } from '@/api/year'
export default {
  data() {
    return {
      form: {
        StageName: '',
        State: true,
        CreateTime: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    },
    clickAdd() {
      var temptime = new Date()
      this.form.CreateTime = temptime
      AddYear(this.form).then(result => {
        this.$message({
          message: '添加成功',
          type: 'success'
        })
      }).catch(Response => {
        this.$message({
          message: '添加失败',
          type: 'error'
        })
      })
    },

    goBack() {
      console.log('这里是我的返回按钮')
    }
  }
}
</script>

<style scoped>
.mybox{
    padding: 10px;
}
</style>
