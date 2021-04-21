/**
 * 创建订阅-发布模式实例
 * create()方法创建出的实例是单例模式，每个命名空间都有一个独立的单例对象。
 */
 const PSManager = (function () {
    var namespaces = {}
    /**
     * 发布消息
     * @param {string} type   消息类型
     * @param {Object} cache  回调缓存
     * @param  {...any} args 消息内容
     */
     var _publish = function(type,cache, ...args){
        if (cache[type]){
            var listeners = cache[type];
            listeners.forEach(function(cb){
                cb.apply(cb, args)
            })
        }
    }
    /**
     * 订阅消息
     * @param {string} type     消息类型
     * @param {Object} cache    回调缓存
     * @param {*} callback      收到消息后执行回调函数
     */
     var _subsribe = function(type,cache, cb){
        if (!cache[type]){
            cache[type] = [];
        }
        var listeners = cache[type];
        listeners.push(cb)
    }
    /**
     * 创建一个发布-订阅模式的实例
     * @param {*} namespace     命名空间，解决多个模块调用出现冲突,不传默认'_default'
     * @returns 实例
     */
    var create = function(namespace = '_default'){
        var listenerCache = {}
        var subscribe = function(type, cb){
            _subsribe(type, listenerCache, cb)
            return function(){// 注销订阅
                _unsubscribe(type, listenerCache, cb)
            }
        }
        var publish = function(type, ...args){
            _publish(type, listenerCache, ...args)
        }
        return namespaces[namespace] ? namespaces[namespace] : namespaces[namespace] = {subscribe, publish }
    }
    /**
     * 取消订阅
     * @param {string} type     消息类型
     * @param {Function} func   
     */
    var _unsubscribe = function(type, cache, func){
        if (cache[type]){
            cache[type] = cache[type].filter(fn => fn !== func)
        }
    }
    return { create }
})()
const unsubscribe = PSManager.create('page1').subscribe('menu.home',function(newv){
    console.log(`page1,menu.home = ${newv}`)
})
unsubscribe()
PSManager.create('page2').subscribe('menu.home',function(newv){
    console.log(`page2,menu.home = ${newv}`)
})

PSManager.create('page2').publish('menu.home','主页'+ Date.now())