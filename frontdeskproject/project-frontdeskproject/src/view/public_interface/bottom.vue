<template>
    <div class="bottom">
        <span>© 2020 Flowbase. Powered by hyk</span>
    </div>
</template>

<script>
export default {
    name: 'public-bottom'
}
</script>

<style scoped>
.bottom {
    width: 100%;
    height: 80px;
    position: absolute;
    top: 2500px;
    /* background-color: red; */
    text-align: center;
    line-height: 80px; /* 设置与容器高度相同的行高，垂直居中 */
    border-top: 1px solid rgb(170, 170, 170);
}

span {
    display: inline-block;
    font-family: Eudoxus Sans;
    font-size: 18px;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: -2%;
}
</style>