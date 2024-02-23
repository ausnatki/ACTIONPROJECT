<template>
  <div>
    <hand />
    <!-- 这是我的内容部分 -->
    <router-view></router-view> 
    <bottom />
</div>
</template>

<script>
import hand from './hand.vue'
import bottom from './bottom.vue'
export default {
    name:'public_interface',
    components:{
      hand,
      bottom
    }
}
</script>

<style>

</style>