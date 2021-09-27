<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <GoogleCharts/>
    <OnTest/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  <CountUp/>
  <Hello1/>
  <Hello2/>
  <Hello3/>
  <Datatest/>
  <BindTest/>

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import CountUp from './components/CountUp.vue'
import Hello1 from './components/hello1.vue'
import Hello2 from './components/hello2.vue'
import Hello3 from './components/hello3.vue'
import Datatest from './components/datatest.vue'
import BindTest from './components/BindTest.vue'
import OnTest from './components/OnTest.vue'
import GoogleCharts from './components/GoogleCharts.vue'


export default {
  name: 'App',
  components: {
    HelloWorld,
    CountUp,
    Hello1,
    Hello2,
    Hello3,
    Datatest,
    BindTest,
    OnTest,
    GoogleCharts
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
