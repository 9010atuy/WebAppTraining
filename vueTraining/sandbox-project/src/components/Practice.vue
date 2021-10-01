<template>
    <div id="practice">
        <a v-bind="google">Google</a>
        <br>
        <button v-on:click="countUp">click me!</button>
        <p>{{methodCount}}</p>
        <p>{{descriptCounterMethod(3)}}</p>
        <p>{{computedCount}}</p>
        <p>{{descriptCounterComputed(3)}}</p>
        <p v-on:mousemove="getMousePosition">マウスを動かしてみて</p>
        <p>x: {{eventObj.x}}</p>
        <p>y: {{eventObj.y}}</p>
    </div>
</template>
    
<script>
export default {
   name: "Practice",
    data: function(){
        return{
            google:{href: "https://google.com", id:"google-link"},
            eventObj:{x: 0, y: 0},
            methodCount: 0,
            computedCount: 0,
        }
    },
    methods: {
        countUp:function(){
            this.methodCount++;
        },
        getMousePosition:function(event){
            this.eventObj.x = event.x;
            this.eventObj.y = event.y;
        },
        descriptCounterMethod:function(count){
            if(this.methodCount > count){
                this.msg = `counter: more than ${count}`;
            } else {
                this.msg = `counter: less than ${count}`;
            }
            return this.msg;
        }
    },
    computed: {
        descriptCounterComputed:function(){
            let number = this;
            let msg;
            if(this.computedCount > number){
                msg = `counter: more than ${number}`;
            } else {
                msg = `counter: less than ${number}`;
            }
            return msg;
        }
    }
}
</script>
    
<style>
     #google-link{
         font-size:32px;
         text-decoration: none;
     }
</style>