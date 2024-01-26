<template>
  <div class="mybox">
    <el-skeleton style="width: 100%;" :loading="loading" animated>
      <!-- 我的骨架位置 -->
      <template slot="template">
        <el-row :gutter="10">
          <el-col :span="4">
            <el-skeleton-item variant="h1" style="height: 30px;" />
          </el-col>
          <el-col :span="2">
            <el-skeleton-item variant="button" style="height: 30px;" />
          </el-col>
          <el-col :span="1">
            <el-skeleton-item variant="circle" style="height: 30px;" />
          </el-col>
          <el-col :span="1">
            <el-skeleton-item variant="circle" style="height: 30px;" />
          </el-col>
          <el-col :span="1">
            <el-skeleton-item variant="circle" style="height: 30px;" />
          </el-col>
          <el-col :span="1">
            <el-skeleton-item variant="circle" style="height: 30px;" />
          </el-col>
          <el-col :span="2">
            <el-skeleton-item variant="round" style="height: 30px;" />
          </el-col>
          <el-col :span="2">
            <el-skeleton-item variant="round" style="height: 30px;" />
          </el-col>
          <el-col :span="3">
            <el-skeleton-item variant="round" style="height: 30px;" />
          </el-col>
        </el-row>
      </template>
      <!-- 这里是我加载后的界面 -->
      <template>
        <el-row :gutter="10">
          <el-col :span="4">
            <el-input v-model="input" placeholder="请输入内容" />
          </el-col>
          <el-col :span="2">
            <el-button type="primary">搜索</el-button>
          </el-col>
          <el-col :span="3">
            <el-button icon="el-icon-edit" type="success" @click="ClickAdd">添加活动</el-button>
          </el-col>
          <el-col :span="1">
            <el-tooltip content="A类活动" placement="top" effect="light">
              <el-button type="warning" icon="el-icon-search" circle />
            </el-tooltip>
          </el-col>
          <el-col :span="1">
            <el-tooltip content="B类活动" placement="top" effect="light">
              <el-button type="warning" icon="el-icon-search" circle />
            </el-tooltip>
          </el-col>
          <el-col :span="1">
            <el-tooltip content="C类活动" placement="top" effect="light">
              <el-button type="warning" icon="el-icon-search" circle />
            </el-tooltip>
          </el-col>
          <el-col :span="1">
            <el-tooltip content="D类活动" placement="top" effect="light">
              <el-button type="warning" icon="el-icon-search" circle />
            </el-tooltip>
          </el-col>
          <el-col :span="3">
            <el-select
              v-model="value"
              multiple
              filterable
              allow-create
              default-first-option
              placeholder="选择发布学年"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-col>

          <el-col :span="3">
            <el-button icon="el-icon-search" plain>正在进行的活动</el-button>
          </el-col>
        </el-row>
      </template>
    </el-skeleton>
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
      loading: false,
      options: [{
        value: 'HTML',
        label: 'HTML'
      }, {
        value: 'CSS',
        label: 'CSS'
      }, {
        value: 'JavaScript',
        label: 'JavaScript'
      }],
      value: [],
      tempAddflage: this.addflage
    }
  },
  watch: {
    tempAddflage(newVal) {
      this.$emit('update:addflage', newVal)
    },
    addflage(newVal) {
      this.tempAddflage = newVal
    }
  },
  methods: {
    ClickAdd() {
      // 这里要修改中间的标志信息，不要问为什么不放在这里，问就是我要自己挑战自己
      this.tempAddflage = true
    }
  }
}
</script>

<style scoped>
.mybox{
  padding: 10px;
}

</style>
