// 递归增加getter/setter方法
var data = {
    menu: {
        home: 'home',
        mine: 'mine',
    }
};
var wolk = function(obj,path){
    for (var key in obj){
        defineReaactive(obj, key, obj[key],path)
    }
}
var defineReaactive = function (obj, key, val, path) {
    path = `${path ? path + '.' : ''}${key}`
    if (typeof val === 'object') {
        wolk(val, path);
    } else {
        Object.defineProperty(obj, key, {
            set(newv) {
                console.log(`path=${path},key=${key},newv=${newv},oldv=${val}`)
                if (newv !== val) val = newv;
            },
            get() {
                return val
            }
        })
    }
}
wolk(data)

data.menu.home = 'ssss'
data.menu.home = '12'
data.menu.home = '34'
data.menu.arr[1] = 'xxxx'