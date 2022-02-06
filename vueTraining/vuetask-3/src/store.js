import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    todoList: [],
  },
  mutations: {
    addTask(state, todo) {
      state.todoList.push(todo);
    },
    deleteTask(state, index) {
      state.todoList.splice(index, 1);
    },
  },
  getters: {
    getToDoList(state) {
      return state.todoList;
    },
  },
});
