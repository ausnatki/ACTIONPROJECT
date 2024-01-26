<template>
  <div class="mybox">
    <el-page-header content="添加学年" style="margin-bottom: 15px;" @back="goBack" />
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="学年名称">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="学年状态">
        <el-switch v-model="form.delivery" />
      </el-form-item>
      <el-form-item label="学年说明">
        <el-input v-model="form.desc" type="textarea" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    }
  }
}
</script>

<style scoped>
.mybox{
    padding: 10px;
}
</style>
