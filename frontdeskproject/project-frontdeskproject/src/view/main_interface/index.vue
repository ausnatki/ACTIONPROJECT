<template>
  <div>
    <div class="container">
      <pageimg class="pageimg"  v-if="actions[0]!==undefined" :actionlist = actions></pageimg>
      <pagetwo></pagetwo>
      <pagethree class="pagethree" v-if="actions[0]!==undefined" :actionlist = actions></pagethree>
    </div>
  </div>
</template>

<script>
import pageimg from './mdoules/pageone.vue'
import pagetwo from './mdoules/pagetwo.vue'
import pagethree from './mdoules/pagethree.vue'
import { initData } from '@/network/api/action'
import { mapState } from 'vuex'; // 导入 mapState

export default {
  name: 'main-interface',
  components: {
    pageimg,
    pagetwo,
    pagethree
  },
  data(){
    return{
      actions:[]
    }
  },
  computed: {
    ...mapState(['userInfo']), // 映射 Vuex 中的 userInfo 到组件的 computed 属性中
  },
  methods:{
  init(){
    console.log(this.$store.state.auth.userInfo.uid); // 确保输出了正确的 userInfo 对象
    initData(this.$store.state.auth.userInfo.uid).then(result=>{
      console.log(result);
      this.actions = result
    }).catch(Response=>{
      console.log(Response);
    });
  }
},
created(){
  this.init(); // 确保 init 方法在 mounted 钩子中被调用
}

}
</script>

<style scoped>

</style>