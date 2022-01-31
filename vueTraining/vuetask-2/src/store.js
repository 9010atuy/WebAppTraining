import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    page: 1,
  },
  mutations: {
    pageIncrement(state) {
      state.page++;
    },
    pageDecrement(state) {
      state.page--;
    },
  },
});
