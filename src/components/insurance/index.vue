<template>
    <div class="insurance_root">
        <CardType />
        <CardNo />
        <Birthday />
        <Gender />
        <ValidateStart />
        <ValidateEnd />
    </div>
</template>
<script>
import CardType from './CardType';
import Birthday from './Birthday';
import CardNo from './CardNo';
import Gender from './Gender';
import ValidateEnd from './ValidateEnd';
import ValidateStart from './ValidateStart';
export default {
    components:{
        CardType,
        Birthday,
        CardNo,
        Gender,
        ValidateEnd,
        ValidateStart,
    },
    data(){
        return {}
    },
    methods:{
        
    }
}
</script>
<style scoped style='css'>
.insurance_root{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem;
}
.insurance_root > div{
    margin-bottom: 10px;
}
</style>
