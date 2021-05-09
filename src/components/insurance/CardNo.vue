<template>
    <div>
        <span>证件号码：</span>
        <input v-model="cardNo" placeholder="请输入证件号码"/>
    </div>
</template>
<script>
export default {
    data(){
        return {
            cardNo:''
        }
    },
    methods:{
        
    }
}
</script>