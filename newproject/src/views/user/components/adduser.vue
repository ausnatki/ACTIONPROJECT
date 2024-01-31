<template>
  <div>

    <el-dialog title="学生信息" :visible.sync="dialogFormVisible">
      <div style="width: 100%;padding: 0 30px 20px 20px;">
        这里是我们的学生添加部分
      </div>
    </el-dialog>

  </div>
</template>

<script>
export default {
  props: {
    addflage: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      dialogFormVisible: this.addflage,
      loading: false,
      currentDate: '2021-06-01'
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
  }
}
</script>

  <style></style>
