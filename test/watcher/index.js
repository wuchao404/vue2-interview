const vm = (function(){
    var data = {
        menu:{
            home:'home',
            mine:'mine'
        }
    };
    var watch = function(path, callback){

    }
    var findPath = function(path){
        var sagements = path.split('.')
        var obj = data;
        return function(){
            for (var key of sagements){
                obj = obj[key]
            }
            return obj;
        }
    }
    var Observer = (function(){
        var listenerMap = {}, namespaces = {}, namespace = '_default';
        var create = function(type = '_default'){
            namespace = type;
            return namespaces[type] ? namespaces[type] : namespaces[type] = {add, update};
        }
        var add = function(path,cb){
            if (listenerMap[path]){
                var listeners = listenerMap[path];
                listeners.push(cb)
            } else {
                listenerMap[path] = [cb]
            }
        }
        var update = function(){
            listeners.forEach(function(cb){
                cb && cb()
            })
        }
        return {create}
    })()
    var defineProperty = function(obj, key, val){
        Object.defineProperty(obj,key, {
            set(newv){
                if (newv !== val) val = newv;
            },
            get(){
                return val
            }
        })
    }
    return { data, watch,findPath, Observer }
})()

var ob = vm.Observer.create('page1')
console.log(ob)