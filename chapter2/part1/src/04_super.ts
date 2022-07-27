(function () {
  class Animal {
    name: string

    constructor(name: string) {
      this.name = name
    }

    bark() {
      console.log('i am a animal')
    }
  }

  class Dog extends Animal {
    age: number

    constructor(name: string, age: number) {
      super(name);
      this.age = age
    }

    bark() {
      super.bark();
      console.log('wangwangwang')
    }
  }

  const dog = new Dog('nino',25)
  dog.bark()
  console.log(dog)
})()