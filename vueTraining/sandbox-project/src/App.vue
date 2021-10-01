<template>
  <div id="app">
    <Practice/>

  </div>
</template>

<script>
import Practice from './components/Practice.vue'


export default {
  name: 'App',
  components: {
    Practice
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
