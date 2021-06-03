// promise

var p1 = Promise.resolve('1')
var p2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('2')
    }, 1000);
})
var p3 = undefined;
// var p4 = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         reject('4')
//     }, 2000);
// })

// Promise.all( [p1,p2,p3,p4] ) 
// .then(res => {
//     console.log('res=',res)
// }, rejected => {
//     console.log('rejected=',rejected)
// })

Promise.all([p1,p2,p3]).then((onfulfilled) => {
    console.log('onfulfilled=',onfulfilled)
},(onRejected) => {
    console.log('onRejected=',onRejected)
});

// Promise.race(p1,p2,p3,p4).then(res => {
//     console.log('res=',res)
// }).catch(err => {
//     console.log('err=',err)
// })
