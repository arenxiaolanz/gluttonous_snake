"use strict";
class Dog {
    constructor(name, age) {
        console.log('this', this);
        this.name = name;
        this.age = age;
    }
    bark() {
        console.log('wangwangwang');
    }
}
const dog = new Dog('nino', 25);
console.log(dog);
