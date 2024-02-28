// router/index.js
import Vue from 'vue';
import VueRouter from 'vue-router';
import PublicInterface from '@/view/public_interface/index.vue'; // 母版页组件
import Home from '@/view/login/index.vue'; // 具体页面组件
import maininterface from '@/view/main_interface/index.vue' 
import despage from '@/view/des_activity/index.vue'
import AllListpage from '@/view/listpage/all-listpage.vue'
import MyListpage from '@/view/listpage/my-listpage.vue'
import TypeListpage from '@/view/listpage/type-listpage.vue'
import UserPage from '@/view/user/main.vue'
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
            component:maininterface,
            props: true // 启用路由参数传递
        },
        {
          path:'despage',
          name:'DesPage',
          component:despage,
          props: true // 启用路由参数传递
        },
        {
          path:'AllListpage',
          name:'alllistpage',
          component:AllListpage,
          props: true // 启用路由参数传递
        },
        {
          path:'MyListpage/:id',
          name:'mylistpage',
          component:MyListpage,
          props: true // 启用路由参数传递
        },
        {
          path:'TypeListpage/:type',
          name:'typelistpage',
          component:TypeListpage,
          props: true // 启用路由参数传递
        },
        {
          path:'Userpage',
          name:'userpage',
          component:UserPage,
          props: true // 启用路由参数传递
        }
    ],
  },
];

const router = new VueRouter({
  mode: 'history', // 可选：使用 HTML5 History 模式
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  // 在路由导航前将滚动位置设置为顶部
  window.scrollTo(0, 0);
  next();
  
});


export default router;