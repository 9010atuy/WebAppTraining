import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    todoList: [],
    id: 1,
  },
  mutations: {
    addTask(state, todo) {
      state.id++;
      state.todoList.push(todo);
    },
  },
  getters: {
    getToDoList(state) {
      return state.todoList;
    },
    getId(state) {
      return state.id;
    },
  },
});
