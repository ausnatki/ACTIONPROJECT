<template>
    <div class="cardbox" @click="change">
        <div class="cardboximg">
            <el-image
                    style="width: 100%; height: 100%"
                    :src="'https://localhost:7138/api/Tool/'+action.action.eventImages"
                    fit="cover">
            </el-image>
        </div>
        <div class="cardboxtext">
            <span>Big and Juicy Wagyu Beef Cheeseburger</span>
        </div>

        <div class="cardboxmin">
            <div class="minimg"></div>
            <span> 30 minutes</span>
        </div>
        <div class="cardboxlei">
            <div class="leiimg"></div>
            <span>A 类活动</span>
        </div>

    </div>
</template>

<script>
export default {
    props:{
        action:{
            type:Object,
            required:true
        }
    },
    name: 'actity-card',
    methods:{
        change(){
            const action = this.action
            this.$router.push({ name: 'DesPage', params: { action: action } })
        }
    }
}
</script>

<style>
.cardbox {
    /* Rectangle 8 */
    position: absolute;
    width: 400px;
    height: 434px;
    left: 80px;
    right: -80px;
    top: 1709px;
    bottom: 0px;
    border-radius: 30px;

    background: linear-gradient(180.00deg, rgba(231, 249, 253, 0), rgb(231, 249, 253) 100%);
}

.cardboximg {
    /* image 26 */
    position: absolute;
    width: 390px;
    height: 250px;
    left: 4px;
    right: -96px;
    top: 10px;
    bottom: 0px;
    border-radius: 20px;
    background: url(../assets/image26.png);
    overflow: hidden;
    background-position: center center;
}

.cardboxtext {
    /* Big and Juicy Wagyu Beef Cheeseburger */
    position: absolute;
    width: 352px;
    height: 64px;
    left:14px;
    right: -56px;
    top: 280px;
    bottom: 0px;
}

.cardboxtext span {
    color: rgb(0, 0, 0);
    font-family: Inter;
    font-size: 24px;
    font-weight: 600;
    line-height: 32px;
    letter-spacing: -4%;
    text-align: left;
}

.cardboxmin {
    /* Group 829 */
    position: relative;
    width: 108px;
    height: 24px;
}

.cardboxlei {
    /* Group 830 */
    position: relative;
    width: 108px;
    height: 24px;
}

.minimg{
    width: 24px;
    height: 25px;
    position: absolute;
    top: 368px;
    left: 19px;
    background: url(../assets/Timer.png);
}

.cardboxmin span{
    position: absolute;
    top: 373px;
    left: 53px;
    color: rgba(0, 0, 0, 0.6);
    font-family: Inter;
    font-size: 16px;
    font-weight: 500;
    line-height: 17px;
    letter-spacing: -2%;
    text-align: left;
    width: 100px;
}

.leiimg{
    width: 24px;
    height: 25px;
    position: absolute;
    top: 344px;
    left: 157px;
    background: url(../assets/Timer.png);
}

.cardboxlei span{
    position: absolute;
    top: 348px;
    left: 196px;
    color: rgba(0, 0, 0, 0.6);
    font-family: Inter;
    font-size: 16px;
    font-weight: 500;
    line-height: 17px;
    letter-spacing: -2%;
    text-align: left;
    width: 100px;
}
</style>