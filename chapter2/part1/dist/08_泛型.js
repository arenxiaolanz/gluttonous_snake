"use strict";
/*
function fn(a: number): number {
  return a
}*/
function fn(a) {
    return a;
}
let res1 = fn(10);
let res2 = fn('hello');
function fn2(a, b) {
    console.log(b);
    return a;
}
fn2('ninonmi', 25);
function fn3(a) {
    return a.length;
}
class MyClass {
    constructor(name) {
        this.name = name;
    }
}
const mc = new MyClass('ninomi');
