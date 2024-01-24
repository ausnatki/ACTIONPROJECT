<template>
  <div class="mybox">
    <el-table
      :data="tableData"
      border
      style="width: 100%"
    >
      <el-table-column
        prop="id"
        label="编号"
        width="180"
      />
      <el-table-column
        prop="name"
        label="学年"
      />
      <el-table-column
        prop="address"
        label="创建时间"
      />
      <el-table-column
        prop="address"
        label="状态"
      />
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="success"
            plain
            @click="handleDelete(scope.$index, scope.row)"
          >启用</el-button>
        </template>
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="danger"
            plain
            @click="handleDelete(scope.$index, scope.row)"
          >禁用</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {

}
</script>

<style>

.mybox{
    padding: 10px;
}
</style>
