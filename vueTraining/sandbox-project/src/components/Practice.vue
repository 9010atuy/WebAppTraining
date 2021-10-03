<template>
    <div id="practice">
        <button @click="toggle">clcik</button>
        <template v-if="result">
            <h1>Practice</h1>
            <ul>
                <li v-for="(subject,index) in subjects" :key="subject">
                    {{index + ' ' + subject}}
                </li>
            </ul>
        </template>
        <p v-show="result">v-show test</p>
        <template v-for="(value, key) in myLabtop">
            <ul :key="value">
                <li>
                    {{key}}:{{value}}
                </li>
                <hr/>
            </ul>
        </template>
        <div v-for="todo in todos" :key="todo.id">
            <p>{{todo}}</p>
            <select name="status" id="status">
                <option v-for="status in statuses" :value="status" :key="status">
                    {{status}}
                </option>
            </select>
        </div>
    </div>
</template>
    
<script>
export default {
    name: "Practice",
    data:function(){
        return {
            result: true,
            check:true,
            subjects:['ディレクティブ', '算出プロパティ', 'データ'],
            myLabtop:{
                name: 'mpb pro',
                size: 15.4,
                keyLayout: 'JIS',
                color:'dark-gray',
            },
            todos:[
                '旅行予約内容変更可能確認',
                'DTDの確立',
                'DTDの確立',
                '新規システムの仕様把握方法'
            ],
            statuses:[
                'ToDo',
                'Doing',
                'Done'
            ]
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