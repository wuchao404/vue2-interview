
const ps = (function(){
    var namespaces = {}, NAMESPACE = '_default'
    var _subsribe = function(type,cache, cb){
        if (!cache[type]){
            cache[type] = [];
        }
        var listeners = cache[type];
        listeners.push(cb)
    }
    var _publish = function(type,cache, ...args){
        if (cache[type]){
            var listeners = cache[type];
            listeners.forEach(function(cb){
                cb.apply(cb, args)
            })
        }
    }
    var create = function(namespace){
        namespace = namespace || NAMESPACE;
        var listenerCache = {}
        var subscribe = function(type, cb){
            _subsribe(type, listenerCache, cb)
        }
        var publish = function(type, ...args){
            _publish(type, listenerCache, ...args)
        }
        return namespaces[namespace] ? namespaces[namespace] : namespaces[namespace] = {subscribe, publish}
    }
    return {create}
})()
ps.create('page1').subscribe('menu.home',function(newv){
    console.log(`page1,menu.home = ${newv}`)
})
ps.create('page1').subscribe('menu.mine',function(newv){
    console.log(`page1,menu.home = ${newv}`)
})
ps.create('page2').subscribe('menu.home',function(newv){
    console.log(`page2,menu.home = ${newv}`)
})

ps.create('page1').publish('menu.home','主页'+ Date.now())
ps.create('page1').publish('menu.mine','mine'+ Date.now())