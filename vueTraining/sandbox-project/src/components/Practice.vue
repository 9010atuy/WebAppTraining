<template>
    <div id="practice">
        <template v-if="result">
            <h1>Practice</h1>
            <ul>
                <li>ディレクティブ</li>
                <li>算出プロパティ</li>
                <li>データ</li>
            </ul>
        </template>
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
    }
   }
</script>
    
<style>
    div{
        font-size: 32px;
        font-weight: bold;
    }
</style>