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
            <el-input v-model="serchname" placeholder="请输入内容" />
          </el-col>
          <el-col :span="2">
            <el-button type="primary">搜索</el-button>
          </el-col>
          <el-col :span="3">
            <el-button icon="el-icon-edit" type="success" @click="ClickAdd">添加活动</el-button>
          </el-col>
          <el-col :span="1">
            <el-tooltip content="A类活动" placement="top" effect="light">
              <el-button type="warning" icon="el-icon-search" circle @click="clickType('A')" />
            </el-tooltip>
          </el-col>
          <el-col :span="1">
            <el-tooltip content="B类活动" placement="top" effect="light">
              <el-button type="warning" icon="el-icon-search" circle @click="clickType('B')" />
            </el-tooltip>
          </el-col>
          <el-col :span="1">
            <el-tooltip content="C类活动" placement="top" effect="light">
              <el-button type="warning" icon="el-icon-search" circle @click="clickType('C')" />
            </el-tooltip>
          </el-col>
          <el-col :span="1">
            <el-tooltip content="D类活动" placement="top" effect="light">
              <el-button type="warning" icon="el-icon-search" circle @click="clickType('D')" />
            </el-tooltip>
          </el-col>
          <el-col :span="5">
            <el-select
              v-model="serchyear"
              multiple
              filterable
              allow-create
              default-first-option
              collapse-tags
              placeholder="选择发布学年"
              style="width: 250px;"
            >
              <el-option
                v-for="item in options"
                :key="item.stageName"
                :label="item.stageName"
                :value="item.id"
              />
            </el-select>
          </el-col>

          <el-col :span="3">
            <el-button icon="el-icon-search" plain @click="clickin()">正在进行的活动</el-button>
          </el-col>
        </el-row>
      </template>
    </el-skeleton>
  </div>
</template>

<script>
import { addInit } from '@/api/user'

export default {
  props: {
    addflage: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      loading: true,
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
      tempAddflage: this.addflage,
      serchname: '',
      serchtype: '',
      serchyear: '',
      serchin: ''
    }
  },

  watch: {
    tempAddflage(newVal) {
      this.$emit('update:addflage', newVal)
    },
    addflage(newVal) {
      this.tempAddflage = newVal
    },
    // 监听数据变化
    serchname(newVal, oldVal) {
      this.sendDataToParent()
    },
    serchtype(newVal, oldVal) {
      this.sendDataToParent()
    },
    serchyear(newVal, oldVal) {
      this.sendDataToParent()
    },
    serchin(newVal, oldVal) {
      this.sendDataToParent()
    }
  },
  mounted() {
    this.loading = false
  },
  created() {
    this.getinit()
  },
  methods: {
    ClickAdd() {
      // 这里要修改中间的标志信息，不要问为什么不放在这里，问就是我要自己挑战自己
      this.tempAddflage = true
    },
    clickType(type) {
      if (this.serchtype === type) this.serchtype = ''
      else this.serchtype = type
    },
    // 获取一些初始化数据
    getinit() {
      console.log('这里是我的初始化操作')
      addInit().then(result => {
        // console.log(result)
        const filteredResults = result.data
          .map(e => {
            return e
          })
          .filter(e => e.state !== false)

        this.options = filteredResults
      }).catch(error => {
        console.log(error)
      })
    },
    // 点击正在进行中的活动的事件
    clickin() {
      if (this.serchin !== 'go') { this.serchin = 'go' } else { this.serchin = '' }
    },
    // 监听的配套事件
    sendDataToParent() {
      // Emit an event with the data
      console.log('进入到子组件的监听配套事件')
      this.$emit('send-data', {
        serchname: this.serchname,
        serchtype: this.serchtype,
        serchyear: this.serchyear,
        serchin: this.serchin
      })
    }
  }
}
</script>

<style scoped>
.mybox{
  padding: 10px;
}

</style>
