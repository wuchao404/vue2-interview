
const Subject = (function(){
    const namespaces = {}, _DEFAULT = '_default';
    const _registOberver = function(cache, type, ob){
        if (!cache[type]){
            cache[type] = [];
        }
        cache[type].push(ob);
    }
    const _notifyObserver = function(cache, type, ...args){
        if (cache[type]){
            cache[type].forEach((cb, i) => {
                cb && cb.apply(cb, args)
            })
        }
    }
    const create = function(namepsace = _DEFAULT){
        const cache = {};

        const registOberver = function(type = _DEFAULT, ob){
            _registOberver(cache, type, ob)
        }
        const notifyObserver = function(type = _DEFAULT, ...args){
            _notifyObserver(cache, type,args)
        }
        return namespaces[namepsace] ? namespaces[namepsace] : namespaces[namepsace] = {registOberver,notifyObserver}
    }
    return {create}
})();

// Subject.create('1').registOberver('1-1', function(res){
//     console.log('1-1=',res)
// })
// Subject.create('1').registOberver('1-2', function(res){
//     console.log('1-2=',res)
// })
// Subject.create('2').registOberver('2-1', function(res){
//     console.log('2-1=',res)
// })
// Subject.create('2').registOberver('2-2', function(res){
//     console.log('2-2=',res)
// })

// Subject.create('1').notifyObserver('1-1', '1111')
// Subject.create('1').notifyObserver('1-2', '222')
// Subject.create('2').notifyObserver('2-1', '3333')
// Subject.create('2').notifyObserver('2-2', '4444')