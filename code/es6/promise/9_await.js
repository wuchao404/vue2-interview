async function getNum1 (){
    Promise.reject('error');
}
async function getNum2 (){
    Promise.resolve('2');
}
async function test(){
    const num1 = await getNum1();
    const num2 = await getNum2();

    console.log('num1=',num1);
    console.log('num2=',num2);
}
test()