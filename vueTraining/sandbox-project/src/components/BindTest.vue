<template>
<div id="bind-test">
    <img src="https://cdn.pixabay.com/photo/2021/09/06/01/13/coffee-6600644__480.jpg">
    <!-- v-bindで属性の値を変数で設定 -->
    <img v-bind:src="imgUrl">
    <br>
    <a v-bind:href="webUrl">ymoriページ</a>
    <p v-bind:style="{backgroundColor:favColor}">aaaa</p>
</div>
</template>
    
<script>
export default {
   name: 'BindTest',
   data:function(){
       return {
           imgUrl:'https://cdn.pixabay.com/photo/2018/12/09/07/36/city-3864462__480.jpg',
           webUrl:'https://www.ymori.com',
           favColor:'black'
       }
   }
       
}
</script>
    
<style>
    #bind-test{
        border-top: 2px solid black;
        padding: 20px 0;
    }
     
</style>