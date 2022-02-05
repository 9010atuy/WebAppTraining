<template>
  <div id="todo-list">
    <table>
      <thead>
        <th>ID</th>
        <th>コメント</th>
        <th>状態</th>
      </thead>
      <tbody>
        <tr v-for="todo in todoList" :key="todo">
          <td>{{ todo.id }}</td>
          <td>{{ todo.task }}</td>
          <td>
            <button>{{ todo.status }}</button>
          </td>
          <td>
            <button>削除</button>
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
