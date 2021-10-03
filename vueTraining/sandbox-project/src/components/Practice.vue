<template>
    <div id="practice">
        <button @click="toggle">clcik</button>
        <template v-if="result">
            <h1>Practice</h1>
            <ul>
                <li>ディレクティブ</li>
                <li>算出プロパティ</li>
                <li>データ</li>
            </ul>
        </template>
        <p v-show="result">v-show test</p>
    </div>
</template>
    
<script>
export default {
    name: "Practice",
    data:function(){
        return {
            result: true,
            check:true
        }
    },
    methods:{
        toggle:function(){
            this.result = !this.result;
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