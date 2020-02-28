import Vue from 'vue'
import Vuex from 'vuex'
import {setToken} from '@/utils/common/auth'
import {setStore, getStore} from '@/utils/common/store'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: getStore({name: 'token'}) || '',
    userInfo: getStore({name: 'userInfo'}) || [],
    status: 1
  },
  mutations: {
    SET_STATUS: (state) => {
      state.status = state.status + 1;
    },
    SET_TOKEN: (state, token) => {
      setToken(token);
      state.token = token;
      setStore({name: 'token', content: state.token, type: 'session'})
    },
    SET_USER_INFO: (state, userInfo) => {
      state.userInfo = userInfo;
      setStore({name: 'userInfo', content: state.userInfo})
    },
  },
  actions: {
  },
  modules: {
  }
})
