// Vue实例
const Vue_ = function(props){
    const {key,data,watch,methods} = props;
    this._id = key;
    this.data = data();
    this.depen(watch);
    this.recursion(this.data)
    this.mapMethods(methods)
}
/**
 * 给wathc对象添加订阅
 * @param {Object} watch 
 */
Vue_.prototype.depen = function(watch){
    for (var key in watch) {
        this.observer(this._id).subscribe(key, watch[key])
    }
}
/**
 * 递归调用
 * @param {*} obj 
 * @param {*} path 
 */
Vue_.prototype.recursion = function(obj,path){
    for (var key in obj) {
        this.defineReaactive(obj, key, obj[key], path)
    }
}
/**
 * 给对象添加getter/setter方法
 * @param {*} obj 对象
 * @param {*} key 属性名
 * @param {*} val 属性值
 * @param {*} path 属性路径
 */
Vue_.prototype.defineReaactive = function(obj, key, val, path){
    var _self = this;
    path = `${path ? path + '.' : ''}${key}`
    if (typeof val === 'object') {
        this.recursion(val, path);
    } else {
        Object.defineProperty(obj, key, {
            set(newv) {
                console.log(`path=${path},key=${key},newv=${newv},oldv=${val}`)
                _self.observer(_self._id).publish(path, newv, val)
                if (newv !== val) val = newv;
            },
            get() {
                return val
            }
        })
    }
}
Vue_.prototype.mapMethods = function(methods){
    var _this = this;
    for (var key in methods){
        Vue_.prototype[key] = function(){
            return methods[key].apply(_this,arguments)
        }
    }
}
// 观察者
Vue_.prototype.observer = (function () {
    var namespaces = {}, NAMESPACE = '_default'
    /**
     * 监听
     * @param {string} path 
     * @param {*} cache 
     * @param {Function} cb 
     */
    var _subsribe = function (path, cache, cb) {
        if (!cache[path]) {
            cache[path] = [];
        }
        var listeners = cache[path];
        listeners.push(cb)
    }
    /**
     * 发布订阅
     * @param {string} path 
     * @param {*} cache 
     * @param  {arguments} args 
     */
    var _publish = function (path, cache, ...args) {
        if (cache[path]) {
            var listeners = cache[path];
            listeners.forEach(function (cb) {
                cb.apply(cb, args)
            })
        }
    }
    /**
     * 创建观察者实例
     * @param {String} namespace 
     * @returns {{subscribe, publish}} 返回一个对象
     */
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
    return create;
})();

const vm1 = new Vue_({
    key: '' + Date.now(),
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
            console.log(this.data)
            console.log(`newv=${newv},oldv=${oldv}`)
        },
        "menu.mine": function (newv, oldv) {
            console.log(`newv=${newv},oldv=${oldv}`)
        }
    },
    methods:{
        setHomeName(name){
            console.log('name=',name)
            this.data.menu.home = name
        }
    }
})
vm1.setHomeName('这是home主页')
