<template>
  <div>
    <hand />
    <!-- 这是我的内容部分 -->

    <transition name="slide-fade">
    <router-view class="page"></router-view>
</transition>

    <bottom />
  </div>
</template>

<script>
import hand from './hand.vue'
import bottom from './bottom.vue'
export default {
  name: 'public_interface',
  components: {
    hand,
    bottom
  }
}
</script>

<style scoped>
  .slide-fade-enter-active,
  .slide-fade-leave-active
     {
       will-change: transform;
       transition: all 500ms;
       position: absolute;
     }.slide-fade-enter {
         opacity: 0;
         transform: translate3d(-100%, 0, 0);
     }.slide-fade-leave-active {
         opacity: 0;
         transform: translate3d(100%, 0, 0);
     }
     /* //解决空白的问题就是下面这段css */
      .page {
         /* position: absolute; */
         top: 0;
         bottom: 0;
         width: 100%;
         margin: 0 auto;
     }

</style>