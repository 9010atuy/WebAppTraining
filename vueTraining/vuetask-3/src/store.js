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
      const status = state.todoList[index].status;
      if (status === '作業中') {
        state.todoList[index].status = '完了';
      } else if (status === '完了') {
        state.todoList[index].status = '作業中';
      }
    },
  },
  getters: {
    getToDoList(state) {
      return state.todoList;
    },
  },
});
