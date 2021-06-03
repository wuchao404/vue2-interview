Promise.map = function (vals, cb) {
    // 一个等待所有map的promise的新promise 
    return Promise.all(
        // 注：一般数组map(..)把值数组转换为 promise数组
        vals.map(function (val) {
            // 用val异步map之后决议的新promise替换val 
            return new Promise(function (resolve) {
                cb(val, resolve);
            });
        })
    );
};

Promise.map(['a','a1','a2','a3','a4'], function(val, resolve){
    console.log(val)
    console.log(resolve())
})