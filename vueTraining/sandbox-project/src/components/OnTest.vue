<template>
    <div id="on-test">
        <button value="いいね" v-bind:disabled="isClick" v-on:click="oneClick">いいね</button>
    </div>
</template>
    
<script>
const good = () => {
    alert('いいね！');
}
export default {
   name: "OnTest",
   data:function(){
       return {
           isClick:false
       }
   },
   methods:{
       oneClick: function(){
           this.isClick = true;
           good();
       }
   }
}
</script>
    
<style>
     
</style>