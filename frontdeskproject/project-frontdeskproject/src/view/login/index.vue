<template>
  <div>
    <div class="box">
        <div class="content">
            <div class="login-wrapper">
                <h1>登录</h1>
                <div class="login-form">
                    <div class="username form-item">
                        <span>使用学生学号登录</span>
                        <input type="text" v-model="form.userName" class="input-item">
                    </div>
                    <div class="password form-item">
                        <span>密码</span>
                        <input type="password" v-model="form.password" class="input-item">
                    </div>
                    <button class="login-btn" @click="clicklogin">登 录</button>
                </div>
                <div class="divider">
                    <span class="line"></span>
                    <span class="divider-text">其他方式登录</span>
                    <span class="line"></span>
                </div>
                <div class="other-login-wrapper">
                    <div class="other-login-item">
                        <img src="./asset/QQ.png" alt="">
                    </div>
                    <div class="other-login-item">
                        <img src="./asset/WeChat.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import {Login,getalluser} from '@/network/api/user'
import '@/view/login/style.css'
import { mapActions } from 'vuex';
export default {
  name:'public_interface',
  data(){
    return{
        form:{
            userName:'',
            password:''
        }
    }
  },
  created(){
    this.testfunction()
  },
  methods:{
    ...mapActions(['login']), // 使用 mapActions 导入 login action
    clicklogin(){
         // 将表单数据转换为JSON格式
  // 将表单数据转换为JSON格式
  const jsonData = {
      userName: this.form.userName,
      password: this.form.password
    };

    Login(jsonData).then(result=>{
      this.login(this.form.userName); // 调用 Vuex 中的 login action 来设置用户认证状态
      console.log(result)
      
      this.$message({
        message:'登录成功',
        type:'success'
      });

      this.$router.push({ name: 'Main' }); // 导航到/home页面
    }).catch(Response=>{
      console.log(Response);
      this.$message({
        message:'登录失败',
        type:'error'
      });
    });
    },
    testfunction(){
        getalluser().then(result=>{
            console.log(result)
        }).catch(Response=>{
            console.log(Response)
            console.log('请求失败推断跨域问题')
        })
    }
  }
}
</script>

<style>

</style>
