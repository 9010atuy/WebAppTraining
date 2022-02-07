<template>
  <div id="todo-list">
    <table class="table is-striped is-fullwidth">
      <thead>
        <th>ID</th>
        <th>コメント</th>
        <th>状態</th>
      </thead>
      <tbody>
        <tr v-for="(todo, index) in todoList" :key="todo.id">
          <td>{{ index + 1 }}</td>
          <td>{{ todo.task }}</td>
          <td>
            <button class="button is-info" @click="changeStatus(index)">
              {{ todo.status }}
            </button>
          </td>
          <td>
            <button class="button is-warning" @click="deleteToDo(index)">
              削除
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'ToDoList',
  data: () => {
    return {
      todoList: [],
    };
  },
  methods: {
    deleteToDo: function (index) {
      this.$store.commit('deleteTask', index);
    },
    changeStatus: function (index) {
      this.$store.commit('changeStatus', index);
      this.todoList = this.$store.getters.getToDoList;
    },
  },
  mounted() {
    this.$store.subscribe(mutation => {
      switch (mutation.type) {
        case 'addTask':
          this.todoList = this.$store.getters.getToDoList;
          break;
        case 'filterAll':
          this.todoList = this.$store.getters.getToDoList;
          break;
        case 'filterDone':
          this.todoList = this.$store.getters.doneToDoList;
          break;
        case 'filterDoing':
          this.todoList = this.$store.getters.doingToDoList;
          break;
      }
    });
  },
};
</script>

<style></style>
