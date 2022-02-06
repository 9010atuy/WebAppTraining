<template>
  <div id="add-todo">
    <div class="field">
      <h2 class="subtitle">タスクの追加</h2>
      <input
        class="input is-small"
        type="text"
        v-model="task"
        ref="inputtask"
      />
      <button class="button" @click="addTask">追加</button>
    </div>
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
      if (this.task !== '') {
        const todo = { task: this.task, status: '作業中' };
        this.$store.commit('addTask', todo);
        this.task = '';
      }
      this.$refs.inputtask.focus();
    },
  },
};
</script>

<style></style>
