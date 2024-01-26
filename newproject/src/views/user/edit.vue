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
            <Details :userid="userid" />
          </template>

        </el-skeleton>
      </div>
    </el-dialog>

  </div>
</template>

<script>
import Details from './components/editdetails.vue'
export default {
  components: {
    Details
  },
  props: {
    userid: {
      type: [Number, String],
      required: true
    },
    dialogflag: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      dialogFormVisible: true,
      loading: true,
      currentDate: '2021-06-01'
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
    }
  }
}
</script>

<style></style>
