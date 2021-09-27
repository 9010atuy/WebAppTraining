<template>
  <div id="app">
    <EnqueteEntry></EnqueteEntry>
  </div>
</template>

<script>
import EnqueteEntry from './components/EnqueteEntry.vue'


export default {
  name: 'App',
  components: {
    EnqueteEntry
  }
}
</script>

<style>
#app {
  margin:auto;
  padding: 0;
  width: 70%;
  border: 3px solid aqua;
}
</style>
