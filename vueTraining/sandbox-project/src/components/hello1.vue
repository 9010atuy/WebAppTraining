<template>
    <div id="hello1">
        <p>{{myText}}</p>
    </div>
</template>
    
<script>
export default {
name: "Hello1",
data:function() {
    return {
        myText:"hello"
    }
}
}
</script>
    
<style>
    #hello1{
        border-top: 2px solid black;
        padding: 20px 0;
    }
</style>