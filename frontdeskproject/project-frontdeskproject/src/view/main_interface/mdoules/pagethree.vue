<template>
    <div>
        <div class="title">
            <span>List of school events</span>
        </div>
        <div class="title-des">
            <span>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqut enim ad minim </span>
        </div>
        <div class="active-box">
            <boxcard class="boxcard1" :action="actionlist[0]"></boxcard>
            <boxcard class="boxcard2" :action="actionlist[1]"></boxcard>
            <boxcard class="boxcard3" :action="actionlist[2]"></boxcard>
            <boxcard class="boxcard4" :action="actionlist[3]"></boxcard>
            <boxcard class="boxcard5" :action="actionlist[4]"></boxcard>
            <boxcard class="boxcard6" :action="actionlist[5]"></boxcard>
        </div>

    </div>
</template>

<script>
import boxcard from '../components/actitycard.vue'
export default {
    name: 'page-three',
    props:{
        actionlist:{
            type:[Array,Object],
            required:true
        }
    },
    components: {
        boxcard
    }
}
</script>

<style scoped>
.title {
    /* Simple and tasty recipes */
    position: absolute;
    width: 527px;
    height: 57px;
    left: 518px;
    right: 296px;
    top: 1304px;
    bottom: 84px;
}

.title span {
    color: rgb(0, 0, 0);
    font-family: Inter;
    font-size: 48px;
    font-weight: 600;
    line-height: 58px;
    letter-spacing: -4%;
    text-align: left;
}

.title-des {
    /* Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim */
    position: absolute;
    width: 706px;
    height: 57px;
    left: 400px;
    right: 210px;
    top: 1380px;
    bottom: 2px;
    text-align: center;
    /* 将文本容器的文本居中对齐 */
}

.title-des span {
    color: rgba(0, 0, 0, 0.6);
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0%;
    text-align: center;
    display: inline-block;
    /* 将span元素转换为块级元素 */
}

.active-box{
    transform: scale(0.9);
}

.boxcard1 {
    transform: translateX(-10px) translateY(-104px)
}
.boxcard2 {
    transform: translateX(490px) translateY(-104px)
}
.boxcard3 {
    transform: translateX(980px) translateY(-104px)
}
.boxcard4 {
    transform:translateX(-10px) translateY(400px)
}
.boxcard5 {
    transform: translateX(490px) translateY(400px)
}
.boxcard6 {
    transform: translateX(980px) translateY(400px)
}
</style>