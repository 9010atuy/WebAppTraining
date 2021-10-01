<template>
    <div id="practice">
        <a v-bind="google">Google</a>
        <br>
        <button v-on:click="countUp">click me!</button>
        <p>{{count}}</p>
        <p>{{descriptCounterMethod(3)}}</p>
        <p>{{descriptCounterComputed}}</p>
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
            count: 0,
            msg: "What's number",
            number: 5,
        }
    },
    methods: {
        countUp:function(){
            this.count++;
        },
        getMousePosition:function(event){
            this.eventObj.x = event.x;
            this.eventObj.y = event.y;
        },
        descriptCounterMethod:function(count){
            if(this.count > count){
                this.msg = `counter: more than ${count}`;
            } else {
                this.msg = `counter: less than ${count}`;
            }
            return this.msg;
        }
    },
    computed: {
        descriptCounterComputed:function(){
            let msg;
            if(this.count > this.number){
                msg = `counter: more than ${this.number}`;
            } else {
                msg = `counter: less than ${this.number}`;
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