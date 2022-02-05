<template>
  <div id="home">
    <h1>ToDoリスト</h1>
    <AddToDo />
    <input type="radio" name="status" id="all" value="all" checked />
    <label for="all">すべて</label>
    <input type="radio" name="status" id="doing" value="doing" />
    <label for="doing">作業中</label>
    <input type="radio" name="status" id="done" value="done" />
    <label for="done">完了</label>
    <ToDoList />
  </div>
</template>

<script>
import ToDoList from './ToDoList.vue';
import AddToDo from './AddTodo.vue';

export default {
  name: 'Home',
  components: {
    ToDoList,
    AddToDo,
  },
};
</script>

<style></style>
