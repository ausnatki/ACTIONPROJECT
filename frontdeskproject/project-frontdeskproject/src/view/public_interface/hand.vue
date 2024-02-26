<template>
  <div class="mybox">
        <el-row>
            <el-col :span="6">
                <div class="grid-content "> 
                    <!-- <span class="left">主题活动界面</span> -->
                    <img class="navleft" src="./svg/navleft.svg" alt="">
                </div>
            </el-col>
            <el-col :span="12">
                <div class="grid-content navconter">
                    <span class="navconter item1" @click="clickmainpage">活动主页</span>
                    <span class="navconter item2" @click="toMypath">我的活动</span>
                    <span class="navconter item3" @click="ToAllList">活动列表</span>
                    <span class="navconter item4">关于我们</span>
                </div>
            </el-col>
                <el-col :span="6">
                    <div class="grid-content">
                    <el-image
                        style="width: 50px; height: 50px; border-radius: 50%; overflow: hidden; position: absolute; top: 15px; right: 70px;"
                        :src="`https://localhost:7138/api/Tool/`+userimg"
                        fit="fill">
                    </el-image>
                    </div>
                </el-col>
        </el-row>
        <div class="navbottm"></div>
  </div>
</template>

<script>
import { mapState } from 'vuex'; // 导入 mapState

export default {
    name:'public-hand',
    computed: {
    ...mapState(['userInfo']), // 映射 Vuex 中的 userInfo 到组件的 computed 属性中
    },
    data(){
        return{
            userimg:this.$store.state.auth.userInfo.imp
        }
    },
    created(){
        console.log(this.$store.state.auth.imp)
        
    },
    methods:{
        clickmainpage(){
            const currentPath = this.$router.currentRoute.path;
            const newPath = `/public/main`;
            if (currentPath !== newPath) {
                this.$router.push(newPath);
            }
        },
        toMypath(){
            // this.$router.push({ name: 'mylistpage',params:{id:this.$store.state.auth.userInfo.uid} });
            const currentPath = this.$router.currentRoute.path;
            const newPath = `/public/MyListpage/${this.$store.state.auth.userInfo.uid}`;

            if (currentPath !== newPath) {
                this.$router.push(newPath);
            }
        },
        ToAllList(){
            // 在你的组件中
            this.$router.push({ name: 'public.alllistpage' });
        },
    }
}
</script>

<style scoped>
 .grid-content{
    /* background: gray; */
    height: 80px;
 }
 .navleft {
    position: absolute;
    left: 100px;
    top: 26px;
}

.navconter{
    height: 80px;
    color: rgb(0, 0, 0);
    font-family: Inter;
    font-size: 17px;
    font-weight: 900;
    line-height: 19px;
    letter-spacing: -2%;
    text-align: left;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 1px 0px 0px 0px;
    flex: none;
    order: 0;
    flex-grow: 0;
    padding: 0 32px;
    transition: all 1s;
    cursor: default;
}

.navconter:hover{
    transition: all 1s;
    /* transform: translate(0, -20px) ; */ 
}

.item1:hover {
  transform: translateY(-5px); /* 鼠标悬停时文字上移 */
}
.item2:hover {
  transform: translateY(-5px); /* 鼠标悬停时文字上移 */
}
.item3:hover {
  transform: translateY(-5px); /* 鼠标悬停时文字上移 */
}
.item4:hover {
  transform: translateY(-5px); /* 鼠标悬停时文字上移 */
}


.navbottm{
    left: 0;
    top: 80px;
    position: absolute;
    width: 99.9%;
    height: 0;
    border: 1px solid rgba(0, 0, 0, 0.1);
}
</style>