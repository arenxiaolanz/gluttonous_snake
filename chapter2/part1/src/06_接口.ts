(function () {
     type myType = {
       name:string,
       age:number,
       [propName:string]:any
     }

     interface myInterface{
       name:string
       age:number
       bark():void
     }
     class myClass implements myInterface{
       name:string
       age:number
       constructor(name:string,age:number) {
         this.name = name
         this.age = age
       }
       bark(){
         console.log('aaaa')
       }
     }

     const obj:myType={
       name:'nino',
       age:25,
       sex:'female'
     }
  }
)()