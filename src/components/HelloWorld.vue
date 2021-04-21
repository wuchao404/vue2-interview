<template>
  <div class="hello">
    <p>{{titleName}}</p>
    <button @click="changetitleName">修改标题</button>
    <div>
      <p>{{menu.home}}</p>
      <p>{{menu.mine}}</p>
    </div>
    <button @click="changeMenu">修改菜单</button>
  </div>
</template>

<script>
export default {
  props: {
    msg: String
  },
  data(){
    return {
      titleName: '标题',
      menu:{
        home:'主页',
        mine:'我的'
      }
    }
  },
  methods:{
    changetitleName(){
      this.titleName = '改标题'+ Date.now()
      console.log('titleName=',this.titleName)
      console.log('this.$el.titleName=',this.$el.titleName)
      this.$nextTick(function(){
        console.log('text=',this.$el.titleName)
      })
    },
    changeMenu(){
      this.menu.home = '主页'+ Date.now()
    },
  },
  
  beforeCreate(){
    console.log('beforeCreate')
  },
  beforeMount(){
    console.log('beforeMount')
  },
  mounted(){
    console.log('mounted')
  },
  beforeUpdate(){
    console.log('mounted')
  },
  beforeDestroy(){
    console.log('beforeDestroy')
  },
  watch:{
    "menu.home": function(newv,oldv){
      console.log('newv=',newv)
      console.log('oldv=',oldv)
    },
    "menu": function(newv,oldv){
      console.log('newMenu=',newv)
      console.log('oldvMenu',oldv)
    },
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
