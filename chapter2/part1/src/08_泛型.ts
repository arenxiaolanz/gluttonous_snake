/*
function fn(a: number): number {
  return a
}*/
function fn<T>(a: T): T {
  return a
}

let res1 = fn(10)
let res2 = fn<string>('hello')

function fn2<T, K>(a: T, b: K): T {
  console.log(b)
  return a
}

fn2('ninonmi', 25)

interface Inter {
  length: number
}

function fn3<T extends Inter>(a: T): number {
  return a.length
}
class MyClass<T> {
  name:T
  constructor(name:T) {
    this.name = name
  }
}
const mc = new MyClass<string>('ninomi')




