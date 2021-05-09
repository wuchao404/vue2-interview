<template>
    <div>
        <span>出生日期：</span>
        <input v-model="birthday" type="date"/>
    </div>
</template>
<script>
import moment from 'moment'
export default {
    data(){
        return {
            birthday:moment(new Date()).format('YYYY-MM-DD')
        }
    },
    methods:{
        
    }
}
</script>