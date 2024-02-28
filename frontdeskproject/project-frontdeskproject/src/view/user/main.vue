<template> 
    <div class="my-box">
        <el-row :gutter="10">
            <!-- 右边一个大图片块，占用三分之一的宽度 -->
            <el-col :span="5">
                <div style="height: 400px;background-color: #f0f0f0;border-radius:20px;overflow: hidden;">
                    <el-image
                        style="width: 100%; height: 100%"
                        :src="`https://localhost:7138/api/Tool/`+$store.state.auth.userInfo.imp"
                        >
                </el-image>
                </div>
            </el-col>
            <!-- 左边三个小块，每个占用四分之一的宽度 -->
            <el-form ref="form" :model="form" label-width="100px" >
                <el-col :span="10">
                    <div style="height: 50px; margin-bottom: 100px;  margin-top: 40px;">
                        <el-form-item label="学生姓名：">
                            <el-input v-model="form.Name"></el-input>
                        </el-form-item>
                    </div>
                    <div style="height: 50px; margin-bottom: 110px;">
                        <el-form-item label="学号：">
                            <el-input v-model="code"></el-input>
                        </el-form-item>
                    </div>
                    <div style="height: 50px; margin-bottom: 10px;">
                        <el-form-item label="联系方式：">
                            <el-input v-model="form.Phone"></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="9">
                    <div style="height: 50px; margin-bottom: 100px; margin-top: 40px;">
                        <el-form-item label="性别：">
                            <el-input v-model="userinfo.sex"></el-input>
                        </el-form-item>
                    </div>
                    <div style="height: 50px; margin-bottom: 110px;">
                        <el-form-item label="所属学院：">
                            <el-input v-model="userinfo.faculties"></el-input>
                        </el-form-item>
                    </div>
                    <div style="height: 50px; margin-bottom: 10px;">
                        <el-button type="primary" icon="el-icon-edit" @click="clickedit"  circle></el-button>
                        <el-button type="text" @click="logout">退出登录</el-button>
                    </div>
                </el-col>
            </el-form>
        </el-row>

        <el-row style="padding-top: 100px;">
            <el-col>
                    <el-table
                    :data="tableData"
                    border
                    size="medium"
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
    </div>
</template>

<script>
import { GetUserinfo,edituser } from '@/network/api/user'
import { mapState } from 'vuex'; // 导入 mapState
export default {
    name: 'UserPage',
    data(){
        return{
            form: {
                Id:'',
                Name:'',
                Phone:''
            },
            userinfo:{},
            tableData:[],
            code : this.$store.state.auth.userInfo.code
        }           
    },
    computed: {
    ...mapState(['userInfo']), // 映射 Vuex 中的 userInfo 到组件的 computed 属性中
    },
    created(){
        this.initdata()
    },
    methods:{
        initdata(){
            console.log(this.$store.state.auth.userInfo.uid)
            GetUserinfo(this.$store.state.auth.userInfo.uid).then(result=>{
                this.userinfo = result.data.userinfo
                this.tableData = result.data.list
            }).catch(response=>{
                console.error(response)
                this.$message({
                    type:'error',
                    message:'服务器发生错误，数据初始化失败'
                })
            }).finally(()=>{
                this.form.Id = this.userinfo.uid
                this.form.Name = this.$store.state.auth.userInfo.name
                this.form.Phone =this.$store.state.auth.userInfo.phone
            })
        },
        tableRowClassName({ rowIndex }) {
            // console.log('已经进入到不同行不同颜色的方法中了')
            if (rowIndex % 4 === 1) {
                return 'warning-row';
            } else if (rowIndex % 4 === 3) {
                return 'success-row';
            }
            return '';
        },
        // 点击修改事件
    clickedit() {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
            edituser(this.form).then(() => {
        this.$message({
          type: 'success',
          message: '修改成功！'
        })
      }).catch(Response => {
        console.error(Response)
        this.$message({
          type: 'error',
          message: '服务器发生错误，修改失败'
        })
      })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
    },
    // 推出事件
    logout(){
        this.$router.push('/');
    }
    }
}
</script>

<style scoped>
.my-box {
    /* padding-top: 100px; */
    left: 1%;
    }

    .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }

  .el-table {
    border: 1px solid #ccc; /* 设置表格边框样式 */
}
</style>