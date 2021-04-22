/**
    1.data改为函数
    2.lodash.get方法
    3.proxy实现数据代理
    5.为什么原型上只能有方法，不能有属性
 */
const Observer = (function () {
    var namespaces = {}, NAMESPACE = '_default'
    var _subsribe = function (type, cache, cb) {
        if (!cache[type]) {
            cache[type] = [];
        }
        var listeners = cache[type];
        listeners.push(cb)
        console.log('listeners=', listeners)
    }
    var _publish = function (type, cache, ...args) {
        if (cache[type]) {
            var listeners = cache[type];
            listeners.forEach(function (cb) {
                cb.apply(cb, args)
            })
        }
    }
    var create = function (namespace) {
        namespace = namespace || NAMESPACE;
        var listenerCache = {}
        var subscribe = function (type, cb) {
            _subsribe(type, listenerCache, cb)
        }
        var publish = function (type, ...args) {
            _publish(type, listenerCache, ...args)
        }
        return namespaces[namespace] ? namespaces[namespace] : namespaces[namespace] = { subscribe, publish }
    }
    return { create }
})();
const VM = (function () {
    let _id = '', _data = {}
    // 监听watch对象
    var _watch = function (watch) {
        for (var key in watch) {
            console.log('key=',key)
            Observer.create(_id).subscribe(key, watch[key])
        }
    }
    // 遍历对象属性
    var _wolk = function (obj, path) {
        for (var key in obj) {
            _defineReaactive(obj, key, obj[key], path)
        }
    }
    // 给对象添加getter/setter
    var _defineReaactive = function (obj, key, val, path) {
        path = `${path ? path + '.' : ''}${key}`
        if (typeof val === 'object') {
            _wolk(val, path);
        } else {
            Object.defineProperty(obj, key, {
                set(newv) {
                    console.log(`path=${path},key=${key},newv=${newv},oldv=${val}`)
                    Observer.create(_id).publish(path, newv, val)
                    if (newv !== val) val = newv;
                },
                get() {
                    return val
                }
            })
        }
    }

    var findPath = function (path) {
        var sagements = path.split('.')
        var obj = data;
        return function () {
            for (var key of sagements) {
                obj = obj[key]
            }
            return obj;
        }
    }
    var _VM = function(){
        const {id, data, watch,methods} = json;
        _id = id;
        _data = data;
        _watch(watch);
        _wolk(_data)
        return {};
    }
    return function (json) {
        
    }
})();
// 测试

var vm = VM({
    id: Date.now() + '',
    data: function () {
        return {
            menu: {
                home: 'home',
                mine: 'mine'
            }
        }
    },
    watch:{
        "menu.home":function (newv, oldv) {
            console.log(`newv=${newv},oldv=${oldv}`)
        },
        "menu.mine": function (newv, oldv) {
            console.log(`newv=${newv},oldv=${oldv}`)
        }
    }
})

vm.data.menu.home = '改主页'

console.log('vm=', vm)