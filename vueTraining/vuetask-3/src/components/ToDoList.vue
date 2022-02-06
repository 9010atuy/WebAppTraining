<template>
  <div id="todo-list">
    <table class="table is-striped">
      <thead>
        <th>ID</th>
        <th>コメント</th>
        <th>状態</th>
      </thead>
      <tbody>
        <tr v-for="(todo, index) in todoList" :key="todo">
          <td>{{ index + 1 }}</td>
          <td>{{ todo.task }}</td>
          <td>
            <button>{{ todo.status }}</button>
          </td>
          <td>
            <button @click="deleteToDo(index)">削除</button>
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
  },
  mounted() {
    this.$store.subscribe(mutation => {
      if (mutation.type === 'addTask') {
        this.todoList = this.$store.getters.getToDoList;
      }
    });
  },
};
</script>

<style></style>
