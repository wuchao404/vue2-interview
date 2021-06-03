interface A {
    name: string,
    age: number
  }
  interface B {
    name: string,
    sayGender: (gender: string) => void
  }
  
  let a: A | B
  let b: A & B
  a.name // 可以访问

 b.age
 b.name