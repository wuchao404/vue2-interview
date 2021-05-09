<template>
    <div>
        <span>证件有效期结束：</span>
        <input v-model="end" type="date"/>
    </div>
</template>
<script>
import moment from 'moment'
export default {
    data(){
        return {
            end:moment(new Date()).format('YYYY-MM-DD')
        }
    },
    methods:{
        
    }
}
</script>