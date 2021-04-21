class Dep{
    constructor(){
        this.listeners = [];
    }
    addListener(callback){
        this.listeners.push(callback)
    }
    removeListener(callback){
        this.listeners = this.listeners.filter(i => i !== callback)
    }
    depen(target){

    }
    notify(){
        this.listeners.forEach((callback) => {
            callback()  
        })
    }
}

function defineReactive(obj, key, val){
    var dep = new Dep()
    Object.defineProperty(obj, key, {
        set(newv){
            if (newv !== val){
                val = newv;
            }
            dep.notify();
        },
        get(){
            return val
        }
    })
}

function watch(path,callback){

}
function findPath(path){
    var sagements = path.split('.')
    return function(){
        for(var v of sagements){
            
        }
    }
}
var data = {
    menu:{
        home:'home',
        mine:'mine'
    }
}
var vm1 = {
    data:data,
    $watcher:watch
}

vm.$watcher('menu.home',function(newv,oldv){
    console.log('newv=',newv)
    console.log('oldv=',oldv)
})