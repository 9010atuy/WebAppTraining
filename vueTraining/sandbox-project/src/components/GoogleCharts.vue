<template>
    <div id="google-charts">
        <h2>GoogleCharts draw</h2>
        <h3>Favorite Lunch</h3>
        <div id="chart-div"></div>
    </div>
</template>
    
<script>
const gcUrl = 'https://www.gstatic.com/charts/loader.js';
const orgdata = [
    ['種類','個数'],
    ['幕内',3],
    ['カルビ弁当',5],
    ['オムライス',10],
    ['ハンバーガー',15],
];



export default {
   name:"GoogleCharts",
   monted(){
       const scriptEl = document.createElement('script')
       scriptEl.setAttribute('scr', gcUrl)
       document.getElementById('google-charts').appendChild(scriptEl)
   },
   methods:{
       
   },

}
</script>
    
<style>
     
</style>