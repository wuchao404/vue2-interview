var rejectedTh = {
    then: function (resolved, rejected) {
        rejected("Oops");
        resolved()
    }
};
var rejectedPr = Promise.resolve(rejectedTh);
rejectedPr.then(res => {
    console.log(res)
}).catch(e => {
    console.log('e=',e)
})
