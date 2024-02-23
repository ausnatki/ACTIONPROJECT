// // store/index.js
// import Vue from 'vue';
// import Vuex from 'vuex';

// Vue.use(Vuex);

// const store = new Vuex.Store({
//   state: {
//     token: null, // 你的 token 状态
//     // 其他的状态
//   },
//   mutations: {
//     setToken(state, token) {
//       state.token = token;
//     },
//     // 其他的 mutations
//   },
//   actions: {
//     // 你的 actions
//   },
//   getters: {
//     // 你的 getters
//   }
// });


// export default store;
// store/index.js

import Vue from 'vue';
import Vuex from 'vuex';
import auth from './modules/auth';  // 引入 auth 模块
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,  // 注册 auth 模块
    // 其他模块...
  },
  plugins: [createPersistedState()]
});