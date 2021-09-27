<template>
    <div id="header">
        {{headerMsg}}
    </div>
</template>
<script>
export default {
    name: 'Header',
    props: {
        headerMsg: String
    }
}
</script>

<style scoped>
#header{
    background-color: aquamarine;
    border: 3px solid aqua;
    height: 100px;
}
</style>