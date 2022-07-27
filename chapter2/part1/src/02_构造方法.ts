class Dog {
  name:string
  age:number

  constructor(name:string,age:number) {
    console.log('this',this)
    this.name = name
    this.age = age
  }

  bark() {
    console.log('wangwangwang')
  }
}

const dog = new Dog('nino',25)
console.log(dog)