let num: number;
num = 10
//num='ada'  //不能将类型“string”分配给类型“number”。

let str: string;
str = 'ninomiya'
//str = true   //Type 'true' is not assignable to type 'string'.

//声明完变量直接进行赋值
// let c: boolean = false
//如变量的声明和赋值是同时进行的，TS可以自动对变量进行类型检测
let c = true
c = false

/*
function sum(a, b) {
  return a + b
}
console.log(sum(123,456)) //579
console.log(sum(123,'456'))//'123456'*/
function sum(a:number, b:number) : number {
  return a + b
}

console.log(sum(123, 456)) //579
//console.log(sum(123, '456'))//'123456'//Argument of type '"456"' is not assignable to parameter of type 'number'.
let result = sum(123,456)


















