class A{
    constructor(){
        new.target.bar()
        this.a = 'a'
    }
    foo(){
        console.log('A=',this.a)
    }
    static bar(){
        console.log('static bar')
    }
}

class B{
    constructor(){
        this.b = 'b'
    }
    foo(){
        console.log('b=',this.b)
    }
}

class ChildA extends A {
    foo(){
        super.foo()
        console.log('ChildA=',this.a)
    }
}

class ChildB extends B {
    foo(){
        super.foo()
        console.log('ChildB=',this.b)
    }
}

var a = new ChildA();
var b = new ChildB();

// a.foo()
// b.foo()

// console.log('instanceof=', a instanceof A )
