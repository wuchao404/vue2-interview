let o = {}

Object.defineProperty(o, 'name',{
    set(){
        console.log('set')
    },
    get(){
        console.log('get')
    }
})
o.name
o.name = 'zhangs'