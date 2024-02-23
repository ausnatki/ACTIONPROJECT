// router/index.js
import Vue from 'vue';
import VueRouter from 'vue-router';
import PublicInterface from '@/view/public_interface/index.vue'; // 母版页组件
import Home from '@/view/login/index.vue'; // 具体页面组件
import maininterface from '@/view/main_interface/index.vue' 
import despage from '@/view/des_activity/index.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/public',
    component: PublicInterface,
    children: [
      // 其他页面的路由可以继续添加
        {
            path:'main',
            name:'Main',
            component:maininterface
        },
        {
          path:'despage',
          name:'DesPage',
          component:despage
      }
    ],
  },
];

const router = new VueRouter({
  mode: 'history', // 可选：使用 HTML5 History 模式
  base: process.env.BASE_URL,
  routes
});

export default router;