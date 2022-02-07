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
    changeStatus(state, index) {
      const todo = state.todoList[index];
      if (todo.status === '作業中') {
        todo.status = '完了';
      } else if (todo.status === '完了') {
        todo.status = '作業中';
      }
      console.log(todo);
      state.todoList[index] = todo;
    },
    filterDoing() {
      return;
    },
    filterDone() {
      return;
    },
    filterAll() {
      return;
    },
  },
  getters: {
    getToDoList(state) {
      return state.todoList;
    },
    doneToDoList(state) {
      return state.todoList.filter(todo => todo.status === '完了');
    },
    doingToDoList(state) {
      return state.todoList.filter(todo => todo.status === '作業中');
    },
  },
});
