<template>
    <div>
        <span>证件有效期开始：</span>
        <input v-model="start" type="date"/>
    </div>
</template>
<script>
import moment from 'moment'
export default {
    data(){
        return {
            start:moment(new Date()).format('YYYY-MM-DD')
        }
    },
    methods:{
        
    }
}
</script>