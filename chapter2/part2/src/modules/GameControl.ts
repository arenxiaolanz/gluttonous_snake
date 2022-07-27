import Food from "./Food";
import ScorePanel from "./ScorePanel";
import Snake from "./Snake";

class GameControl {
  snake: Snake
  food: Food
  scorePanel: ScorePanel
  //创建一个属性来存储蛇的移动方向
  direction: string = ''
  isAlive: boolean = true

  constructor() {
    this.snake = new Snake()
    this.food = new Food()
    this.scorePanel = new ScorePanel()

    this.init()
  }

  //游戏初始化
  init() {
    document.addEventListener('keydown', this.keydownHandler.bind(this))
    this.run()
  }

  // ArrowUp Up
  // ArrowDown Down
  // ArrowLeft Left
  // ArrowRight Right
  //创建一个键盘按下的响应函数
  keydownHandler(event: KeyboardEvent) {
    this.direction = event.key
  }

  run() {
    let X = this.snake.X
    let Y = this.snake.Y
    switch (this.direction) {
      case 'ArrowUp':
      case 'Up':
        Y -= 10
        break
      case 'ArrowDown':
      case 'Down':
        Y += 10
        break
      case 'ArrowLeft':
      case 'Left':
        X -= 10
        break
      case 'ArrowRight':
      case 'Right':
        X += 10
        break
    }
    this.checkEat(X, Y)
    try {
      this.snake.X = X
      this.snake.Y = Y
    } catch (e) {
      // @ts-ignore
      alert(e.message + '    GAME OVER!!!')
      this.isAlive = false
      this.snake.X = 0
      this.snake.Y = 0

    }
    this.isAlive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30)
  }

  checkEat(X: number, Y: number) {
    if (X == this.food.X && Y == this.food.Y) {
      console.log('吃到了！！！')
      this.food.change()
      this.scorePanel.addScore()
      this.snake.addBody()
    }
  }
}

export default GameControl