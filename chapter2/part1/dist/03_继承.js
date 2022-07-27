"use strict";
(function () {
    class Animal {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        bark() {
            console.log('i am a animal');
        }
    }
    class Dog extends Animal {
        /*
            constructor(name: string, age: number) {
              // @ts-ignore
              super()
            }
        
            bark() {
              console.log('wangwangwang')
            }*/
        run() {
            console.log(`${this.name}在跑`);
        }
    }
    class Cat extends Animal {
    }
    const dog = new Dog('nino', 25);
    console.log(dog);
    dog.bark();
    dog.run();
    const cat = new Cat('nbnbn', 21);
    console.log(cat);
    cat.bark();
})();
