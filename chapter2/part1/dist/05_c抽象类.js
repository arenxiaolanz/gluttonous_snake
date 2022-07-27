"use strict";
(function () {
    class Animal {
        constructor(name) {
            this.name = name;
        }
        bark() {
            console.log('i am a animal');
        }
    }
    class Dog extends Animal {
        constructor(name, age) {
            super(name);
            this.age = age;
        }
        bark() {
            super.bark();
            console.log('wangwangwang');
        }
        eat() {
            console.log('eat meat');
        }
    }
    const dog = new Dog('nino', 25);
    dog.bark();
    console.log(dog);
})();
