<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-row :gutter="20">
        <!-- 左边三个小块，每个占用四分之一的宽度 -->
        <el-col :span="16">
          <!-- 左侧第一个小块 -->
          <div style="height: 50px;  margin:20px 0 40px 0;">
            <el-form-item label="学生姓名">
              <el-input v-model="name" />
            </el-form-item>
          </div>
          <!-- 左侧第二个小块 -->
          <div style="height: 50px;  margin:0 0 40px 0">
            <el-form-item label="学生性别">
              <el-input v-model="sex" />
            </el-form-item>
          </div>
          <!-- 左侧第三个小块 -->
          <div style="height: 50px;  margin:0 0 0 0">
            <el-form-item label="行政年纪">
              <el-input v-model="start" />
            </el-form-item>
          </div>
        </el-col>

        <!-- 右边一个大图片块，占用三分之一的宽度 -->
        <el-col :span="7">
          <img
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            class="image"
            style="width: 100%;height: 260px;"
          >
        </el-col>
      </el-row>

      <el-row :gutter="10">
        <el-col>
          <div style="margin-top: 20px; height: 50px;">
            <el-form-item label="联系电话">
              <el-input v-model="start" />
            </el-form-item>
          </div>
        </el-col>
      </el-row>

      <el-row>
        <el-col>
          <el-table
            :data="tableData"
            height="300px"
            border
            style="width: 100%;margin-top: 40px;"
          >
            <el-table-column
              prop="semester"
              label="学期"
              width="180"
            />
            <el-table-column
              prop="aintegral"
              label="A类"
              sortable
            />
            <el-table-column
              prop="bintegral"
              label="B类"
              sortable
            />
            <el-table-column
              prop="cintegral"
              label="C类"
              sortable
            />
            <el-table-column
              prop="dintegral"
              label="D类"
              sortable
            />
            <el-table-column
              prop="name"
              label="总和"
              sortable
            >
              <template slot-scope="scope">
                {{ scope.row.aintegral*0.3+scope.row.bintegral*0.3+scope.row.cintegral*0.3+scope.row.dintegral*0.1 }}
              </template>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>

      <el-row :gutter="10" style="margin-top: 15px;">
        <el-col :span="4"><el-button type="primary">赋予权限</el-button></el-col>

        <el-col :span="4"><el-button type="danger">撤销权限</el-button></el-col>
      </el-row>

    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Details',
  props: {
    userid: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      tableData: [{
        semester: '2021-2022 上半学期',
        aintegral: 90,
        bintegral: 80,
        cintegral: 70,
        dintegral: 100
      },
      {
        semester: '2021-2022 上半学期',
        aintegral: 90,
        bintegral: 80,
        cintegral: 70,
        dintegral: 100
      },
      {
        semester: '2021-2022 上半学期',
        aintegral: 90,
        bintegral: 80,
        cintegral: 70,
        dintegral: 100
      },
      {
        semester: '2021-2022 上半学期',
        aintegral: 90,
        bintegral: 80,
        cintegral: 70,
        dintegral: 100
      },
      {
        semester: '2021-2022 上半学期',
        aintegral: 90,
        bintegral: 100,
        cintegral: 70,
        dintegral: 100
      },
      {
        semester: '2021-2022 上半学期',
        aintegral: 90,
        bintegral: 80,
        cintegral: 70,
        dintegral: 100
      }]
    }
  }
}
</script>

<style>

</style>
