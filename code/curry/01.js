const curry = function(fn){
    
}

const sum = function (a,b,c,d){
    return a + b + c + d;
}
const sumCry = curry(sum);

console.log(sumCry(1)(2)(3)(4))