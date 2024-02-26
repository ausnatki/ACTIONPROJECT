<template>
    <div class="categories">
        <div class="title">
            <span>Categories</span>
        </div>
        <div class="title-right title-right-hover" @click="ToAllList">
            <span>View All Categories</span>
        </div>
        <div class="imgbox">
            <div class="imgbox-item">
                <div class="imgbox-imga"></div>
                <div class="imgbox-text imgbox-text-hover" @click="Totype(A)">
                    <span>A类活动</span>
                </div>
            </div>
            <div class="imgbox-item">
                <div class="imgbox-imgb"></div>
                <div class="imgbox-text imgbox-text-hover" @click="Totype(B)">
                    <span>B类活动</span>
                </div>
            </div>
            <div class="imgbox-item">
                <div class="imgbox-imgc"></div>
                <div class="imgbox-text imgbox-text-hover" @click="Totype(C)">
                    <span>C类活动</span>
                </div>
            </div>
            <div class="imgbox-item">
                <div class="imgbox-imgd"></div>
                <div class="imgbox-text imgbox-text-hover" @click="Totype(D)">
                    <span>D类活动</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'page-two',
    methods:{
        ToAllList(){
            // 在你的组件中
        this.$router.push({ name: 'alllistpage' });
        },
        Totype(type){
            this.$router.push({ name: 'typelistpage',params:{type:type} });
        }

    }
}
</script>

<style scoped>
.categories {
    /* Categories */
    position: absolute;
    width: 1280px;
    height: 342px;
    left: 120px;
    top: 800px;
    bottom: 5694px;
    /* background-color: red; */
}

.title {
    /* Categories */
    position: absolute;
    width: 238px;
    height: 57px;
    left: 12px;
    right: 962px;
    top: 0px;
    bottom: -667px;
    
}

.title span {
    color: rgb(0, 0, 0);
    font-family: Inter;
    font-size: 48px;
    font-weight: 600;
    line-height: 58px;
    letter-spacing: -4%;
    text-align: left;
    letter-spacing: -1%;
    cursor: default;
}

.title-right {
    /* Rectangle 3 */
    position: absolute;
    width: 200px;
    height: 60px;
    left: 1079px;
    right: -1160px;
    top: 0px;
    bottom: -950px;
    border-radius: 16px;

    background: rgb(231, 250, 254);
    transition: all 0.3s;
}

.title-right-hover:hover{
    transition: all 0.5s;
   background: rgb(195, 240, 250);
}


.title-right span {
    position: absolute;
    width: 163px;
    height: 19px;
    left: 26px;
    right: -1133px;
    top: 18px;
    bottom: -930px;
    color: rgb(0, 0, 0);
    font-family: Inter;
    font-size: 16px;
    font-weight: 600;
    line-height: 19px;
    letter-spacing: -2%;
    text-align: left;
    cursor: default;
}

.imgbox {
    /* Group 842 */
    position: absolute;
    width: 1280px;
    height: 202px;
    left: 0px;
    right: -80px;
    top: 125px;
    bottom: -950px;
    /* background-color: blue; */
    display: flex;
    justify-content: center;
    /* 水平居中 */
    flex-wrap: wrap;
    /* 自动换行 */
    cursor: default;
}

.imgbox-item {
    /* Group 836 */
    /* position: absolute; */
    width: 180px;
    height: 202px;
    /* background-color: #ccc; */
    margin: 0 60px;
    /* 设置间距 */
}

.imgbox-text {
/* Rectangle 7 */
width: 200px;
height: 152px;
margin: 50px 0 0 0;
border-radius: 30px;
background: linear-gradient(180.00deg, rgba(240, 158, 0, 0),rgba(240, 158, 0, 0.1) 100%);
transition: all 1s;
}
.imgbox-text-hover:hover{
    transition: all 1s;
    background: linear-gradient(180.00deg, rgba(3, 223, 248, 0) 6.797%,rgba(0, 203, 255, 0.35) 99.439%,rgba(78, 156, 176, 0.35) 100%);
}

.imgbox-text span{
    color: rgb(0, 0, 0);
    font-family: Inter;
    font-size: 18px;
    font-weight: 600;
    line-height: 22px;
    letter-spacing: -2%;
    text-align: center;
    position: relative;
    top: 65%;
    left: 30%;
}

.imgbox-imga {
    /* image 25 */
    position: absolute;
    width: 200px;
    height: 200px;
    background: url(../assets/A.png);
    transform: scale(0.6);
    top: -30px;
}

.imgbox-imgb {
    /* image 25 */
    position: absolute;
    width: 200px;
    height: 200px;
    background: url(../assets/B.png);
    transform: scale(0.6);
    top: -30px;
}

.imgbox-imgc {
    /* image 25 */
    position: absolute;
    width: 200px;
    height: 200px;
    background: url(../assets/C.png);
    transform: scale(0.6);
    top: -30px;
}

.imgbox-imgd {
    /* image 25 */
    position: absolute;
    width: 200px;
    height: 200px;
    background: url(../assets/D.png);
    transform: scale(0.6);
    top: -30px;
}
</style>