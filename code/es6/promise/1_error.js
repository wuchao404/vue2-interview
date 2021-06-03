var p = Promise.resolve(42);
p.then(
    function fulfilled(msg) {
        // 数字没有string函数，所以会抛出错误
        console.log(msg.toLowerCase());
    },
    function rejected(err) {
        // 永远不会到达这里
        console.log(err)
    }
);
