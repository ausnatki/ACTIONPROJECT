<template>
    <div v-if="data && data.action">
        <!-- 这里是我的头部的左边部分 -->
        <div class="header">
            <span >{{ data.action.activityName }}</span>
            <div class="headerbox">
                <div class="headerbox-one">
                    <span style="display: block;">{{ data.userinfo.name }}</span>
                    <span>{{ data.action.organizerPhoneNumber }}</span>
                    <img src="./assets/Ellipse2.png" />
                </div>
                <div class="headerline"></div>
                <div class="headerbox-two">
                    <img src="./assets/Timer.png" alt="">
                    <div class="textbox">
                        <span >剩余时间：</span>
                        <span> {{ timeinit(data.action.activityAppEndTime) }} minutes</span>
                    </div>
                </div>
            </div>
        </div>
        <!-- 这里是我两个按钮的位置 -->
        <div class="submitone" @click="clickApplication">
            <div class="submitonebox">
                <img src="./assets/print.png" alt="">
            </div>

            <span>报名</span>
        </div>
        <div class="submittwo" @click="clickquash">
            <div class="submittwobox">
                <img src="./assets/dowm.png" alt="">
            </div>

            <span>撤销</span>
        </div>

        <!-- 这里是我的大图片位置 -->
        <div class="boximg">
            <img :src="`https://localhost:7138/api/Tool/`+data.action.eventImages" style="width: 100%; height: 100%;  border-radius: 25px;" alt="">
        </div>

        <!-- 这里是我图片的列表位置 -->
        <div class="listbox">
            <div class="boxlist-title">活动 相关信息</div>
            <div class="boxlist">
                <span>名称：</span>
                <span>{{ data.action.activityName }}</span>
            </div>

            <div class="boxlist">
                <span>类别：</span>
                <span>{{data.action.activityType}}类活动</span>
            </div>

            <div class="boxlist">
                <span>时间：</span>
                <span>{{ data.action.activityStartTime.replace('T', ' ') }}</span>
            </div>

            <div class="boxlist">
                <span>活动地点：</span>
                <span>{{ data.action.eventLocation }}</span>
            </div>

            <div class="boxlist">
                <span>发起人：</span>
                <span>{{data.userinfo.name}}</span>
            </div>

            <div class="boxlist">
                <span>发起人电话：</span>
                <span>{{data.action.organizerPhoneNumber}}</span>
            </div>

            <div class="boxlist-bottom">adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
        </div>

        <!-- 这里是我的图片下面的介绍位置 -->
        <div class="boxdes">
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
        </div>
    </div>
</template>

<script>
import {Application,ActionQuash} from '@/network/api/action.js'
import { mapState } from 'vuex'; // 导入 mapState

export default {
    name: 'DesPage',
    data(){
        return{
            data:''
        }
    },
    mounted() {
        // 获取路由参数中的 id      
        if(this.$route.params.action !== undefined){
            const action = this.$route.params.action;
            window.localStorage.setItem('reportId', action);
            this.data = action
        }
        else {
            const action = window.localStorage.getItem('reportId');
            this.data = action
        }

    },
    computed: {
    ...mapState(['userInfo']), // 映射 Vuex 中的 userInfo 到组件的 computed 属性中
  } ,
    methods:{
         timeinit(time) {

            console.log(time)
            // 将时间字符串转换为日期时间对象
            var yourTime = new Date(time);

            // 获取当前时间
            var currentTime = new Date();

            // 计算时间差（毫秒）
            var timeDifference = yourTime - currentTime;

            // 将时间差转换为分钟
            var timeDifferenceMinutes = Math.floor(timeDifference / (1000 * 60));
           
            // 判断是否是为负数
            if (timeDifferenceMinutes < 0) timeDifferenceMinutes = 0
            return timeDifferenceMinutes
        },
        clickApplication(){
            console.log('已经进入了报名的事件中')
            // 这里会传入一个活动id和用户id
            const uid = this.$store.state.auth.userInfo.uid
            const aid = this.data.action.id
            Application(uid,aid).then(result=>{
                console.log(result)
                if(result.result.success===true){
                this.$message({
                    type:'success',
                    message:'报名成功'
                })
                return
            }else{
                    console.log(result.result.message)
                    this.$message({
                        type:'warning',
                        message:result.result.message
                    })
                }
            }).catch(Response=>{
                console.error(Response)
                this.$message({
                    type:'error',
                    message:'服务器发生错误'
                })
            })
        },
        clickquash(){
            const uid = this.$store.state.auth.userInfo.uid
            const aid = this.data.action.id
            ActionQuash(uid,aid).then(result=>{
                if(result.result.success===false){
                this.$message({
                    type:'warning',
                    message:result.result.message
                }) 
                return
                }else{
                    this.$message({
                        type:'success',
                        message:result.result.message
                    })
                }
            }).catch(Response=>{
                this.$message({
                    type:'error',
                    message:Response.message
                })
            })
        }
    }
}
</script>

<style scoped>
.header {
    /* Header */
    position: absolute;
    width: 777px;
    height: 175px;
    left: 80px;
    right: 423px;
    top: 190px;
    bottom: 638px;
    /* background-color: red; */
}

.headerbox {
    /* Group 883 */
    position: absolute;
    width: 699px;
    height: 50px;
    left: 80px;
    right: -2px;
    top: 315px;
    bottom: -190px;
}

.headerbox-one {
    /* Group 825 */
    position: absolute;
    width: 163px;
    height: 50px;
    left: -6px;
    right: 456px;
    top: -220px;
    /* bottom: -315px; */
    z-index: 999;
}


.headerbox-one span:first-child {
    /* your styles here */
    /* John Smith */

    color: rgb(0, 0, 0);
    font-family: Inter;
    font-size: 16px;
    font-weight: 700;
    line-height: 19px;
    letter-spacing: -2%;
    text-align: left;

}

.headerbox-one span:last-child {
    color: rgba(0, 0, 0, 0.6);
    font-family: Inter;
    font-size: 14px;
    font-weight: 500;
    line-height: 17px;
    letter-spacing: -2%;
    text-align: left;
}

.headerbox-one>img {
    position: absolute;
    width: 50px;
    height: 50px;
    left: -65px;
    top: 0px;
}

.header>span {
    position: absolute;
    width: 777px;
    height: 77px;
    left: -4px;
    top: -13px;
    color: rgb(0, 0, 0);
    font-family: Inter;
    font-size: 57px;
    font-weight: 600;
    line-height: 77px;
    letter-spacing: -4%;
    text-align: left;
}

.headerbox-two {
    /* Group 881 */
    position: absolute;
    width: 113px;
    height: 40px;
    left: 186px;
    top: -211px;
    z-index: 999;
}

.textbox {
    /* Group 882 */
    position: absolute;
    width: 85px;
    height: 40px;
    left: 40px;
    top: -8px;
}

.textbox>img {
    /* Timer */
    position: absolute;
    width: 24px;
    height: 24px;
    left: 333px;
    top: 328px;
}

.textbox span:first-child {
    color: rgb(0, 0, 0);
    font-family: Inter;
    font-size: 12px;
    font-weight: 500;
    line-height: 15px;
    letter-spacing: 10%;
    text-align: left;
    display: block;
}

.textbox span:last-child {
    color: rgba(0, 0, 0, 0.6);
    font-family: Inter;
    font-size: 14px;
    font-weight: 500;
    line-height: 17px;
    letter-spacing: -2%;
    text-align: left;
}

.headerline {
    position: absolute;
    width: 0;
    height: 50px;
    left: 148px;
    top: -225px;
    border: 1px solid rgba(0, 0, 0, 0.1);
}

.submitone {
    /* background-color: antiquewhite; */
    /* Print */
    position: absolute;
    width: 80px;
    height: 110px;
    left: 1168px;
    right: 32px;
    top: 238px;
    bottom: 655px;
    transition: all 1s;
}
.submitonebox{
    transition: all 1s;
}

.submitonebox:hover{
    transition: all 1s;
    transform: rotate(180deg);
}

.submittwobox{
    transition: all 1s;
}

.submittwobox:hover{
    transition: all 1s;
    transform: rotate(180deg);
}

.submitone>span {
    position: absolute;
    left: 22px;
    margin-top: 5px;
    color: rgb(0, 0, 0);
    font-family: Inter;
    font-size: 14px;
    font-weight: 500;
    line-height: 15px;
    text-align: center;
    letter-spacing: 11px;
}

.submittwo {
    /* background-color: aqua; */
    /* Share */
    position: absolute;
    width: 80px;
    height: 110px;
    left: 1280px;
    right: -80px;
    top: 238px;
    bottom: 655px;
}

.submittwo>span {
    position: absolute;
    left: 22px;
    margin-top: 5px;
    color: rgb(0, 0, 0);
    font-family: Inter;
    font-size: 14px;
    font-weight: 500;
    line-height: 15px;
    text-align: center;
    letter-spacing: 11px;
}

.boximg {
    /* background-color: aquamarine; */
    /* Group 13937 */
    position: absolute;
    width: 840px;
    height: 600px;
    left: 80px;
    right: 360px;
    top: 429px;
    bottom: -26px;
    /* border-radius: 20px; */
}

.listbox {
    background-color: bisque;
    /* Nutrition Card */
    position: absolute;
    width: 400px;
    height: 600px;
    left: 1000px;
    right: -80px;
    top: 429px;
    bottom: -26px;
    border-radius: 30px;

    background: rgb(231, 250, 254);
}

.boxdes {
    /* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. */
    position: absolute;
    width: 1280px;
    height: 84px;
    left: 80px;
    right: -80px;
    top: 1109px;
    bottom: -190px;
    color: rgba(0, 0, 0, 0.6);
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0%;
    text-align: left;
    /* background-color: blue; */
}

.boxlist-title {
    color: rgb(0, 0, 0);
    font-family: Inter;
    font-size: 24px;
    font-weight: 600;
    line-height: 29px;
    letter-spacing: -4%;
    text-align: left;
    width: 80%;
    display: inline-block;
    padding: 20px 0 10px 15px;
}

.boxlist {
    width: 90%;
    display: flex;
    justify-content: space-between;
    padding: 15px 10px 15px 10px;
    margin-left: 10px;
    border-bottom: 1px solid rgb(219, 219, 219);
}

.boxlist>span:first-child {
    /* justify-self: start; */
    color: rgba(0, 0, 0, 0.6);
    font-family: Inter;
    font-size: 18px;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: -4%;
    text-align: left;
}

.boxlist>span:last-child {
    /* justify-self: end;  */
    color: rgb(0, 0, 0);
    font-family: Inter;
    font-size: 18px;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: -4%;
    text-align: right;
}

.boxlist-bottom {
    color: rgba(0, 0, 0, 0.6);
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0%;
    text-align: center;
    align-self: flex-end;
    /* 将底部文本自身对齐到底部 */
    margin-top:150px;
    /* 使用自动外边距将底部文本推到底部 */
    text-align: center;
    /* 居中文本 */
    width: 100%;
    /* 使文本宽度充满整个盒子 */
}

.boxdes{
    color: rgba(0, 0, 0, 0.6);
font-family: Inter;
font-size: 16px;
font-weight: 400;
line-height: 28px;
letter-spacing: 0%;
text-align: left;
}
</style>