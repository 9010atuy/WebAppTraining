<template>
    <div id="hello2">
        <p v-text="myText"></p>
    </div>
</template>
    
<script>
export default {
name: "Hello2",
data:function() {
    return {
        myText:"hello"
    }
}
}
</script>
    
<style>
    #hello2{
        border-top: 2px solid black;
        padding: 20px 0;
    }
</style>