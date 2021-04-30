"use strict";

// promise
var p1 = Promise.resolve('1');
var p2 = new Promise(function (resolve) {
  setTimeout(function () {
    resolve('2');
  }, 1000);
});
var p3 = '3';
var p4 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    reject('4');
  }, 2000);
}); // Promise.all( [p1,p2,p3,p4] ) 
// .then(res => {
//     console.log('res=',res)
// }, rejected => {
//     console.log('rejected=',rejected)
// })

Promise.all([p1, p2, p3, p4]).then(function (onfulfilled) {
  console.log('onfulfilled=', onfulfilled);
}, function (onRejected) {
  console.log('onRejected=', onRejected);
});
Promise.race(p1, p2, p3, p4).then(function (res) {
  console.log('res=', res);
})["catch"](function (err) {
  console.log('err=', err);
});