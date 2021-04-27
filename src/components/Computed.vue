<template>
    <div v-on:click="changeText">
        原值：<p>{{text}}</p>
        计算属性：<p>{{reverse}}</p>
        <button v-on:click="changeText">改变</button>
    </div>
    
</template>
<script>

export default {
    name:'c-computed',
    data(){
        return{
            text:'',
            json:{
                person:{
                    name:'zhangsan'
                }
            }
        }
    },
    computed:{
        reverse(){
            return this.text.split('').reverse().join('')
        }
    },
    methods:{
        changeText(){
            this.text = 'text-value' + Date.now();
        },
    }
}
</script>