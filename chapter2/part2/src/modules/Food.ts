class Food {
  element: HTMLElement

  constructor() {
    this.element = document.querySelector('#food')!
  }

  get X() {
    return this.element.offsetLeft;

  }

  get Y() {
    return this.element.offsetTop;

  }

  change() {
    //生成一个随机位置
    //食物的位置最小是0，最大是290
    //蛇移动一次就是一格，一格的大小就是10，所以食物的移动是10的倍数
    let top = Math.round(Math.random() * 29) * 10
    let left = Math.round(Math.random() * 29) * 10
    this.element.style.left = top + 'px'
    this.element.style.top = left + 'px'
  }
}

export default Food
