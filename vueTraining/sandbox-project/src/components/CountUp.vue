<template>
<div id="count-up">
  <h2>
      クリックしたらカウントアップ
  </h2>
  <p>{{count}}</p>
  <button v-on:click="countUp">カウント</button>
</div>
</template>
<script>
export default {
    name:"CountUp",
    data:function(){
        return {
            count:0
        }
    },
    methods:{
        countUp:function(){
            this.count++;
        }
    }
}
</script>

<style>
    #count-up{
        border-top: 2px solid black;
        padding: 20px 0;
    }
</style>