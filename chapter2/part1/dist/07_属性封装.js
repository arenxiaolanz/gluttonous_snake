"use strict";
(function () {
    class Person {
        constructor(name, age) {
            this._name = name;
            this._age = age;
        }
        /*
            setName(value: string) {
              this._name = value
            }
    
            getName() {
              return this._name
            }
            setAge(value: number) {
              this._age = value
            }
    
            getAge() {
              return this._age
            }*/
        set name(value) {
            this._name = value;
        }
        get name() {
            return this._name;
        }
        set age(value) {
            this._age = value;
        }
        get age() {
            return this._age;
        }
    }
    const per = new Person('nino', 25);
    console.log(per);
    per.name = 'ninobbbbb';
    console.log(per);
    class A {
        constructor(num) {
            this.num = num;
        }
    }
    class B extends A {
        test() {
            console.log(this.num);
        }
    }
    const b = new B(25);
    b.test();
    console.log(b);
    class C {
        constructor(name, age, num) {
            this.name = name;
            this.age = age;
            this.num = num;
        }
    }
})();
