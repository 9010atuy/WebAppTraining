<template>
    <div id="practice">
        <div v-if="result">resulttrue!</div>
        <div v-else-if="check">checktrue!</div>
        <div v-else>false!</div>
    </div>
</template>
    
<script>
export default {
    name: "Practice",
    data:function(){
        return {
            result: false,
            check:true
        }
    }
   }
</script>
    
<style>
    div{
        font-size: 32px;
        font-weight: bold;
    }
</style>