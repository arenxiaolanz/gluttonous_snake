var a;
a = {};
a = function () {
};
//{}用来指定对象中包含哪些属性
//语法：{属性名：属性值，属性名：属性值}
//在属性名后边加上？，表示属性是可选的
var b;
b = { name: 'nino', age: 25 };
//[propName:string]:any   表示任意类型的属性
var c;
c = { name: 'nino', age: 25, gender: 'female' };
//设置函数结构的类型声明：
//  语法： （形参:类型，形参:类型....）=>返回值
var d;
d = function (n1, n2) {
    return n1 + n2;
};
//string[] 表示字符串数组
var e;
e = ['a', 'b', 'c'];
//number[]表示数值数组
var f;
f = [1, 4, 18, 6, 17];
var g;
g = [4, 18, 6, 17];
var objArr;
objArr = [{ name: 'nino' }];
/*
* 元组，元组是固定长度的数组
* */
var h;
h = ['nino', 'rxlrxl', 418617];
/*
* enum 枚举
*
* */
var Gender;
(function (Gender) {
    Gender[Gender["male"] = 0] = "male";
    Gender[Gender["female"] = 1] = "female";
})(Gender || (Gender = {}));
var i;
i = {
    name: 'nino',
    gender: Gender.female
};
console.log(i.gender === Gender.female);
var j;
var jj;
jj = { name: 'nino', age: 18 };
var k;
var l;
var m;
k = 1;
l = 5;
m = 4;
