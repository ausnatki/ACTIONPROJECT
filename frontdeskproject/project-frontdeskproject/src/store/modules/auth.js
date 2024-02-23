// auth.js
import {getinfo} from'@/network/api/user'

const state = {
  isAuthenticated: false,
  userInfo: null // 添加用户信息字段
};

const mutations = {
  SET_AUTHENTICATED(state, isAuthenticated) {
    state.isAuthenticated = isAuthenticated;
  },
  SET_USER_INFO(state, userInfo) { // 新增设置用户信息的 mutation
    state.userInfo = userInfo;
  }
};

const actions = {
  async login({ commit },username) {

    // 调用接口获取用户信息
    try {
      getinfo(username).then(Result=>{
        console.log(Result)
        const userInfo = Result.data
        commit('SET_USER_INFO', userInfo); // 将获取到的用户信息保存到 Vuex 仓库
      }).catch(Response=>{
        console.error(Response)
      })
    
    } catch (error) {
      console.error('Failed to fetch user info:', error);
    }
        // 模拟登录成功
        commit('SET_AUTHENTICATED', true);
  },
  logout({ commit }) {
    // 模拟退出登录
    commit('SET_AUTHENTICATED', false);
    commit('SET_USER_INFO', null); // 退出登录时清空用户信息
  }
};

const getters = {
  isAuthenticated: state => state.isAuthenticated,
  userInfo: state => state.userInfo // 添加用户信息的 getter
};

export default {
  state,
  mutations,
  actions,
  getters
};
