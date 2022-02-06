<template>
  <div id="add-todo">
    <h2>タスクの追加</h2>
    <input
      type="text"
      name="input-add-task"
      id="input-add-task"
      v-model="task"
    />
    <!-- <input type="button" @click="addTask" value="追加" /> -->
    <button @click="addTask">追加</button>
  </div>
</template>

<script>
export default {
  name: 'AddToDo',
  data: () => {
    return {
      task: '',
    };
  },
  methods: {
    addTask: function () {
      const id = this.$store.getters.getId;
      const todo = { id, task: this.task, status: '作業中' };
      this.$store.commit('addTask', todo);
    },
  },
};
</script>

<style></style>
