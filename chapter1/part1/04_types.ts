let a: object
a = {}
a = function () {
}

//{}用来指定对象中包含哪些属性
//语法：{属性名：属性值，属性名：属性值}
//在属性名后边加上？，表示属性是可选的
let b: { name: string, age?: number }
b = {name: 'nino', age: 25}

//[propName:string]:any   表示任意类型的属性
let c: { name: string, [propName: string]: any }
c = {name: 'nino', age: 25, gender: 'female'}

//设置函数结构的类型声明：
//  语法： （形参:类型，形参:类型....）=>返回值
let d: (a: number, b: number) => number
d = function (n1, n2) {
  return n1 + n2
}

//string[] 表示字符串数组
let e: string[]
e = ['a', 'b', 'c']

//number[]表示数值数组
let f: number[]
f = [1, 4, 18, 6, 17]

let g: Array<number>
g = [4, 18, 6, 17]

let objArr: object[]
objArr = [{name: 'nino'}]

/*
* 元组，元组是固定长度的数组
* */
let h: [string, string, number]
h = ['nino', 'rxlrxl', 418617]

/*
* enum 枚举
*
* */
enum Gender {
  male = 0,
  female = 1
}

let i: { name: string, gender: Gender }
i = {
  name: 'nino',
  gender: Gender.female
}
console.log(i.gender === Gender.female)

let j: string | number

let jj: { name: string } & { age: number }
jj = {name: 'nino', age: 18}

//类型的别名
type myType = 1 | 2 | 3 | 4 | 5
let k: myType
let l: myType
let m: myType
k = 1
l = 5
m = 4





























