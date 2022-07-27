//字面量
let a: 10
a = 10

let b: "male" | "female"
b = "male"
b = "female"

let c: boolean | string
c = false
c = 'nino'


// any 表示的是任意类型，一个变量设置类型为any后相当于对该变量关闭了TS的类型检测
// 使用TS时，不建议使用any类型
// let d: any;

// 声明变量如果不指定类型，则TS解析器会自动判断变量的类型为any （隐式的any）
let d
d = 10
d = 'nino'
d = false


let e: unknown
e = 10
e = 'nino'
e = true

//d的类型是any，它可以赋值给任意变量
let s: string
s = d


// unknown 实际上就是一个类型安全的any
// unknown类型的变量，不能直接赋值给其他变量
e = 'nino'
if (typeof e === 'string') {
  s = e
}


// 类型断言，可以用来告诉解析器变量的实际类型
/*
* 语法：
*   变量 as 类型
*   <类型>变量
*
* */

e as string
s = <string> e

// void 用来表示空，以函数为例，就表示没有返回值的函数
function  fn():void {

}

// never 表示永远不会返回结果
function fn2():never {
throw new Error('error')
}



