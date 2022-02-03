import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    page: 1,
    sex: String,
    birthday: String,
    a1: Boolean,
    a2: Boolean,
    a3: Boolean,
    message: String,
  },
  getters: {
    sex: state => {
      return state.sex;
    },
    a1: state => {
      return state.a1;
    },
    a2: state => {
      return state.a2;
    },
    a3: state => {
      return state.a3;
    },
  },
  mutations: {
    pageIncrement(state) {
      state.page++;
    },
    pageDecrement(state) {
      state.page--;
    },
    savePage1(state, pageInfo) {
      state.sex = pageInfo.sex;
      state.birthday = pageInfo.birthday;
    },
    savePage2(state, pageInfo) {
      state.a1 = pageInfo.a1;
      state.a2 = pageInfo.a2;
      state.a3 = pageInfo.a3;
    },
    savePage3(state, pageInfo) {
      state.message = pageInfo.message;
    },
  },
});
