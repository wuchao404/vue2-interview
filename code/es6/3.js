/**
 * 让object具备`for...of功能`
 */
function it1() {
    var obj = {
        name: 'zhangsan',
        age: 23,
        sex: 'man',
        [Symbol.iterator]: function () {
            var keys = Object.keys(this);
            var _this = this, _index = 0;
            return {
                [Symbol.iterator]: function () {
                    return this;
                },
                next() {
                    console.log(`_index=${_index}, length=${keys.length}`)
                    return { done: _index === keys.length, value: _this[keys[_index++]] }
                }
            }
        }

    };
    for (var v of obj) {
        console.log('v1=', v)
    }
    for (var v of obj) {    
        console.log('v2=', v)
    }
}

// iterator
function it2() {
    var o1 = {
        name: 'zhangsan',
        age: 23,
        sex: 'man'
    }
    var _itEnable = function (obj) {
        obj[Symbol.iterator] = function () {
            var keys = Object.keys(obj), _index = 0;
            return {
                [Symbol.iterator]: function () { return this },
                next: function () {
                    return {
                        done: _index === keys.length, 
                        value: obj[keys[_index++]]
                    }
                }
            }
        }
        return function remove(){// 移除
            obj[Symbol.iterator] = undefined;
        }
    }
    // 测试
    o1.start = 'start'
    _itEnable(o1);
    for (var v of o1) {
        console.log('v3=', v)
    }
}
it2()

