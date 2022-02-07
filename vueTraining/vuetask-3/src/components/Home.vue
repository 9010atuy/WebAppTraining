<template>
  <div id="home">
    <h1 class="title is-3">ToDoリスト</h1>
    <AddToDo />
    <FilterRadio />
    <ToDoList />
  </div>
</template>

<script>
import ToDoList from "./ToDoList.vue";
import AddToDo from "./AddTodo.vue";
import FilterRadio from "./FilterRadio.vue";
export default {
  name: "Home",
  components: {
    ToDoList,
    AddToDo,
    FilterRadio,
  },
};
</script>

<style></style>
