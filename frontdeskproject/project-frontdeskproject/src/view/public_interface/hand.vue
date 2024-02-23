<template>
  <div>
        <el-row>
            <el-col :span="6">
                <div class="grid-content "> 
                    <!-- <span class="left">主题活动界面</span> -->
                    <img class="navleft" src="./svg/navleft.svg" alt="">
                </div>
            </el-col>
            <el-col :span="12">
                <div class="grid-content navconter">
                    <span class="navconter">活动主页</span>
                    <span class="navconter">我的活动</span>
                    <span class="navconter">活动列表</span>
                    <span class="navconter">关于我们</span>
                </div>
            </el-col>
                <el-col :span="6">
                    <div class="grid-content">
                    <el-image
                        style="width: 50px; height: 50px; border-radius: 50%; overflow: hidden; position: absolute; top: 15px; right: 70px;"
                        src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                        fit="fill">
                    </el-image>
                    </div>
                </el-col>
        </el-row>
        <div class="navbottm"></div>
  </div>
</template>

<script>
export default {
    name:'public-hand'
}
</script>

<style>
 .grid-content{
    /* background: gray; */
    height: 80px;
 }
.navleft{
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