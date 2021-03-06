export class Player {
  constructor(gameSize) {
    (this.size = { x: 60, y: 6 }),
      (this.center = { x: gameSize.x / 2, y: gameSize.y - 3 });
    this.moving = false;
    this.space = false;
    this.gameSize = gameSize;
  }
  update(ball) {
    const paddleStart = this.center.x - this.size.x / 2;
    const paddleEnd = this.center.x + this.size.x / 2;
    const paddleCanMove = paddleStart >= -2 || paddleEnd < this.gameSize;
    if (ball.center.x > 30 && ball.center.x < 470) {
      this.center.x = ball.center.x;
    }
  }
  printSide() {
    this.input.keyboardPress(this.input.key.left);
  }
}
