<template>
    <div id="hello3">
        <p v-text="myText"></p>
        <p v-html="myText"></p>
    </div>
</template>
    
<script>
export default {
name: "Hello3",
data:function() {
    return {
        myText:"<h1>hello</h1>"
    }
}
}
</script>
    
<style>
    #hello3{
        border-top: 2px solid black;
        padding: 20px 0;
    }
</style>