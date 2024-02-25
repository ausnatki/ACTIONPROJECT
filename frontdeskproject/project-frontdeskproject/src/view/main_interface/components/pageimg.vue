<template>
    <div class="my-box">
        <!-- 这是我的左边部分 -->
        <div class="left">
            <div class="left-button letf-button-hover" @click="clickin">
                <div class="letf-button-icon"></div>
                <span> 活动详情 </span>
            </div>

            <div class="left-title">
                {{ action.action.activityName }}
            </div>

            <div class="left-describe">
                {{ action.action.eventDescription }}
            </div>

            <div class="left-buttonrow">
                <div class="left-buttonrow-1">
                    <div class="left-buttonrow-icon"></div>

                    <span>{{ timeinit(action.action.activityAppStartTime) }} Minutes </span>
                </div>
                <div class="left-buttonrow-2">
                    <div class="left-buttonrow-icon"></div>
                    <span>{{ action.action.activityType }}类活动</span>
                </div>
            </div>

            <div class="left-bottom">
                <div class="left-bottom-usercard">
                    <div class="left-bottom-usercard-img">
                        <el-image
                          style="width: 100%; height: 100%"
                          :src="'https://localhost:7138/api/Tool/'+action.userinfo.user.imp"
                          fit="fill">
                        </el-image>
                        </div>
                    <div class="left-bottom-usercard-name" >{{ action.userinfo.name }}</div>
                    <div class="left-bottom-usercard-time">15 March 2022</div>
                </div>

                <div class="left-bottom-button" @click="clickin">
                    <span>点击进入详情</span>
                    <div class="left-bottom-button-icon"></div>
                </div>
            </div>

        </div>
        <!-- 这是我的右边部分 -->
        <div class="right">
            <div class="right-img">
                <el-image
                        style="width: 100%; height: 100%"
                        :src="'https://localhost:7138/api/Tool/'+action.action.eventImages"
                        fit="cover">
                </el-image>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'main-interface-pageimg',
    props: {
        action: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            actiondata: this.action.action,
            userinfo: this.action.userinfo
        }
    },
    created() {
    },
    methods: {
        timeinit(time) {

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
        clickin(){
            const action = this.action
            this.$router.push({ name: 'DesPage', params: { action: action } })
        }
    }
}
</script>

<style scope>
.my-box {
    position: relative;
    top: -130px;
    left: 3%;
    height: 800px;
    width: 1280px;
    transform: scale(0.85);
}

.left {
    /* Rectangle 1 */
    position: absolute;
    width: 620px;
    height: 640px;
    left: 5%;
    right: 740px;
    top: 150px;
    bottom: 6196px;
    background: rgb(231, 250, 254);
    z-index: 999;
    border-radius: 20px 0px 0px 20px;
}

.left-button {
    /* Rectangle 4 */
    position: absolute;
    width: 156px;
    height: 45px;
    left: 50px;
    top: 50px;
    box-sizing: border-box;
    border: 1px solid rgb(0, 0, 0);
    border-radius: 30px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    background: rgb(255, 255, 255);
    transition: all 1s;
}

.letf-button-hover:hover{
    transition: all 1s;
    transform: translateX(10px);
}


.letf-button-icon {
    /* image 14 */
    position: absolute;
    width: 24px;
    height: 24px;
    left: 21px;
    right: 22px;
    top: 10px;
    bottom: -61px;
    background: url(../assets/image\ 14.png);
}

.left-button span {
    position: absolute;
    width: 79px;
    height: 17px;
    left: 60px;
    right: -70px;
    top: 13px;
    bottom: -58px;
    color: rgb(0, 0, 0);
    font-family: Inter;
    font-size: 15px;
    font-weight: 600;
    line-height: 17px;
    letter-spacing: -2%;
    text-align: left;
    cursor: default;

}

.left-title {
    /* Spicy delicious chicken wings */
    position: absolute;
    width: 520px;
    height: 154px;
    left: 50px;
    right: 710px;
    top: 127px;
    bottom: 359px;
    color: rgb(0, 0, 0);
    font-family: Inter;
    font-size: 64px;
    font-weight: 600;
    line-height: 77px;
    letter-spacing: -4%;
    text-align: left;

}

.left-describe {
    /* Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim */
    position: absolute;
    width: 520px;
    height: 57px;
    left: 50px;
    right: 710px;
    top: 305px;
    bottom: 278px;
    color: rgba(0, 0, 0, 0.6);
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0%;
    text-align: left;
}

.left-buttonrow {
    padding: 10px 0;
}

.left-buttonrow-1 {
    /* Rectangle 4 */
    position: absolute;
    width: 139px;
    height: 40px;
    left: 50px;
    right: -50px;
    top: 391px;
    bottom: -391px;
    border-radius: 30px;

    background: rgba(0, 0, 0, 0.05);
}

.left-buttonrow-icon {
    position: absolute;
    width: 24px;
    height: 24px;
    left: 14px;
    right: 18px;
    top: 8px;
    bottom: -399px;
    background: url(../assets/Timer.png);
}

.left-buttonrow-1 span {
    position: absolute;
    width: 75px;
    height: 17px;
    left: 47px;
    right: -66px;
    top: 12px;
    bottom: -395px;
    color: rgba(0, 0, 0, 0.6);
    font-family: Inter;
    font-size: 14px;
    font-weight: 500;
    line-height: 17px;
    letter-spacing: -2%;
    text-align: left;
}

.left-buttonrow-2 {
    /* Rectangle 4 */
    position: absolute;
    width: 119px;
    height: 40px;
    left: 205px;
    right: -205px;
    top: 391px;
    bottom: -391px;
    border-radius: 30px;

    background: rgba(0, 0, 0, 0.05);
}

.left-buttonrow-2 span {
    position: absolute;
    width: 75px;
    height: 17px;
    left: 47px;
    right: -66px;
    top: 12px;
    bottom: -395px;
    color: rgba(0, 0, 0, 0.6);
    font-family: Inter;
    font-size: 14px;
    font-weight: 500;
    line-height: 17px;
    letter-spacing: -2%;
    text-align: left;
}

.left-bottom-usercard {
    /* Group 825 */
    position: absolute;
    width: 163px;
    height: 50px;
    left: 50px;
    right: 1067px;
    top: 535px;
    bottom: 55px;
}

.left-bottom-usercard-img {
    /* Ellipse 2 */
    position: absolute;
    width: 50px;
    height: 50px;
    left: 17px;
    right: 63px;
    top: 41px;
    bottom: -535px;
    border-radius: 25px;
    overflow: hidden;
    /* background: url(../assets/Ellipse2.png); */
}

.left-bottom-usercard-name {
    position: absolute;
    width: 98px;
    height: 19px;
    left: 82px;
    right: -39px;
    top: 44px;
    bottom: -507px;
    color: rgb(0, 0, 0);
    font-family: Inter;
    font-size: 16px;
    font-weight: 700;
    line-height: 19px;
    letter-spacing: -2%;
    text-align: left;
}

.left-bottom-usercard-time {
    /* 15 March 2022 */
    position: absolute;
    width: 100px;
    height: 17px;
    left: 75px;
    right: -50px;
    top: 71px;
    bottom: -532px;
    color: rgba(0, 0, 0, 0.6);
    font-family: Inter;
    font-size: 14px;
    font-weight: 500;
    line-height: 17px;
    letter-spacing: -2%;
    text-align: left;
}

.left-bottom-button {
    /* Rectangle 3 */
    position: absolute;
    width: 200px;
    height: 60px;
    left: 370px;
    right: -370px;
    top: 568px;
    bottom: -530px;
    border-radius: 16px;
    background: rgb(0, 0, 0);
}

.left-bottom-button span {
    position: absolute;
    width: 91px;
    height: 17px;
    left: 32px;
    right: -340px;
    top: 21px;
    bottom: -544px;
    color: rgb(255, 255, 255);
    font-family: Inter;
    font-size: 15px;
    font-weight: 600;
    line-height: 17px;
    letter-spacing: -2%;
    text-align: left;
}

.left-bottom-button-icon {
    position: absolute;
    width: 24.5px;
    height: 23.69px;
    left: 141px;
    right: -507.75px;
    top: 17px;
    bottom: -545.84px;
    background: rgb(255, 255, 255);

    background: url(../assets/PlayCircle.png);
}

.right {
    /* Mask Group */
    position: absolute;
    width: 660px;
    height: 640px;
    left: 700px;
    right: 80px;
    top: 150px;
    bottom: 6196px;
}

.right-img {
    /* baked-chicken-wings-asian-style-tomatoes-sauce-plate 1 */
    position: absolute;
    width: 982px;
    height: 640px;
    left: -45%;
    right: -730px;
    top: 0px;
    bottom: -150px;
    z-index: 0;
    border-radius: 20px;
    overflow: hidden;
    background: url(../assets/VCG211256078997.jpg);
}
</style>