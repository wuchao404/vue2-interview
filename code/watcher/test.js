var Fun1 = function(){
    this.obj = {}
    this.key = 'name'
}

Fun1.prototype.define = function(obj){
    const df = Object.defineProperty.bind(this, )
    df(obj,this.key,{
        set(v){
            console.log('v=',v)
            console.log('key=',this.key)
        },
        get(){},
    })
}
Fun1.prototype.observer = (function(){
    return function(){
        return 'age'
    }
})()
const fn = new Fun1()
fn.define(fn.obj)
fn.obj.name = 'zhangsan'
fn.observer()