(function () {
  class Person {
    private _name: string
    private _age: number

    constructor(name: string, age: number) {
      this._name = name
      this._age = age
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

    set name(value: string) {
      this._name = value
    }

    get name() {
      return this._name
    }
    set age(value: number) {
      this._age = value
    }

    get age() {
      return this._age
    }
  }

  const per = new Person('nino', 25)
  console.log(per)
  per.name = 'ninobbbbb'
  console.log(per)



  class A {
    protected num:number
    constructor(num:number) {
      this.num = num
    }
  }
  class B extends A{
    test(){
      console.log(this.num)
    }
  }
  const b= new B(25)
  b.test()
  console.log(b)

  class C{
    constructor(public name:string,public age:number,public num:number) {
    }
  }
})()