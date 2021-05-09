<template>
    <div>
        <span>证件类型：</span>
        <select v-model="selected" @change="onSelect">
            <option key="1" value="1">身份证</option>
            <option key="2" value="2">户口本</option>
            <option key="3" value="3">出生证明</option>
            <option key="4" value="4">护照</option>
        </select>
    </div>
</template>
<script>
export default {
    data(){
        return {
            selected: '1'
        }
    },
    methods:{
        onSelect(){
            console.log(this.selected)
        }
    }
}
</script>