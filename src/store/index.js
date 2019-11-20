import Vue from 'vue';
import Vuex from 'vuex';
import {CHECKTODOLIST, LOGIN, PUSHLIST} from './mutations-type';
import {queryTodoListData} from '../service/todoService';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    list: [], // 返回该view层的数据
    loginState: false,
  },
  mutations: {
    [CHECKTODOLIST](state, data) {
    //  赋值
      state.list = data;
    },
    [LOGIN](state, data) {
      state.loginState = data.loginState;
    },
    [PUSHLIST](state, payload) {
      state.list.push(payload);
    }
  },
  actions: {
    async [CHECKTODOLIST]({commit}, info) {
      // 数据提交
      // 数据从dispatch来
      const { data } = await queryTodoListData(info.url);
      commit(CHECKTODOLIST, data.data);
    },
    [LOGIN]({commit}, payload) {
      commit(LOGIN, payload);
    },
    [PUSHLIST]({commit}, payload) {
      commit(PUSHLIST, payload);
    }
  },
  modules: {
  }
});
