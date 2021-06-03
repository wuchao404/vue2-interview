var p3 = new Promise(function (resolve, reject) {
    resolve("B");
});
var p1 = new Promise(function (resolve, reject) {
    var a;
    resolve(a());
});
p2 = new Promise(function (resolve, reject) {
    resolve("A");
}).catch(e => {
    console.log(e)
})
p1.then(function (v) {
    console.log(v);
});
p2.then(function (v) {
    console.log(v);
});