// 箭头函数 =>

function fn1() {

}
var o1 = {
    name:'zhangsan',
    text1:function fn1() {
        console.log('text1=',this.name)
    },
    text2(){
        console.log('text2=',this.name)
    },
    text3: () => {
        console.log('text3=',this.name)
    }
}
var fn1 = o1.text1;
var fn2 = o1.text2;
var fn3 = o1.text3;
// fn1()
// fn2()
// fn3()

// o1.text1()
// o1.text2()
// o1.text3()

function test1(){
    console.log(arguments)
}
test1('1','2')