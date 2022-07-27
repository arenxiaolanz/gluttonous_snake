class Person {
  /*
  * 属性，方法
  * */


  static age: number = 25
  /*
  * 直接定义的属性是实例属性，需要通过对象的实例去访问
  * 使用static开头的属性是静态属性，可以直接通过类去访问
  *
  * */
  name: string = "nino"
  readonly hobby: string = "sleep"

  /*
  * 如果方法以static开头，则方法是类方法，可以直接通过类去调用
  * */
  sayHello() {
    console.log('hello,typescript')
  }

}

const p = new Person()
console.log(p)
p.name = 'rxlrxl'
console.log(p)
p.sayHello()
console.log(Person.name, Person.age);