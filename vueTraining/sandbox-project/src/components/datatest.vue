<template>
    <div id="data-test">
        <p>{{myNumber * 1.08}}</p>
        <p>{{"Hello " + myText}}</p>
        <p>{{myText.substr(0,1)}}</p>
        <p>{{myBool}}</p>
        <p>{{myArray}}</p>
        <p>{{myArray[0]}}</p>
        <p>{{myObj}}</p>
        <p>{{myObj.name + ' ver' + myObj.ver}}</p>
        <p>{{$data}}</p>
        <ul>
            <li v-for="(item,key) in $data" :key="key">{{key}}/{{item}}</li>
        </ul>
    </div>
</template>
    
<script>
export default {
    name: "Datatest",
    data: function(){
        return {
            myNumber: 500,
            myText: 'Yuta',
            myBool: true,
            myArray:['iPhone', 'MBP', 'iPad mini'],
            myObj:{name:'MPB', ver:2019},
            myObjArray:[{name: 'MPB', ver:2019}, {name: 'iPhone', ver: 8}, {name: 'iPad mini', ver: 5}]
        }
    }
}
</script>
    
<style>
    #data-test{
        border-top: 2px solid black;
        padding: 20px 0;
    }
     
</style>