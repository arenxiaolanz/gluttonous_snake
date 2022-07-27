console.log('hello')
console.log('heello')

function fn(a: number, b: number) {
  return a + b
}

function fn2(this: Window) {
  alert(this)
}

let box = document.querySelector('#box')
box?.addEventListener('click', function () {
  alert('hello')
})