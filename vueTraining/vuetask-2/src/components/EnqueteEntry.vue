<template>
    <div id="enquete-entry">
        <Header></Header>
    </div>
</template>

<script>
import Header from './Header.vue'
export default{
    name: 'EnqueteEntry',
    components: {
        Header
    },
    data: function(){
        return {

        }
    }
}
</script>

<style scoped>
#enquete-entry{
    width: 70%;
    border: 1px solid aqua;

}
</style>
