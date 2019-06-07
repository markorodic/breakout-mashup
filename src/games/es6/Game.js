import { Player } from "./Player.js";
import { Ball } from "./Ball.js";
import { Brick } from "./Bricks.js";
import { CollisionDetection } from "./Collisions.js";
import { whichColour } from "../../board/colours.js";

export class Game {
  debugger;
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext("2d");
    this.gameSize = { x: this.canvas.width, y: this.canvas.height };
    this.player = new Player(this.gameSize, this.collisions);
    this.ball = new Ball(this.gameSize);
    this.bricks = this.drawBricks();
    this.lives = 3;
    this.score = 0;
    this.collisions = new CollisionDetection(
      this.ball,
      this.player,
      this.gameSize,
      this.bricks
    );
  }
  drawRect(player, ball) {
    this.ctx.clearRect(0, 0, this.gameSize.x, this.gameSize.y);
    this.ctx.fillStyle = "#00b771";
    this.ctx.fillRect(
      player.center.x - player.size.x / 2,
      player.center.y - player.size.y / 2,
      player.size.x,
      player.size.y
    );
    this.ctx.fillStyle = "#00b771";
    this.ctx.fillRect(
      ball.center.x - ball.size.x / 2,
      ball.center.y - ball.size.y / 2,
      ball.size.x,
      ball.size.y
    );
    this.ctx.fillStyle = "black";
    for (var i = 0; i < this.bricks.length; i++) {
      this.ctx.fillStyle = this.bricks[i].colour;
      this.ctx.fillRect(
        this.bricks[i].center.x - this.bricks[i].size.x / 2,
        this.bricks[i].center.y - this.bricks[i].size.y / 2,
        this.bricks[i].size.x,
        this.bricks[i].size.y
      );
    }
  }
  drawBricks() {
    var bricks = [];
    for (var i = 0; i < 196; i++) {
      var xMultiple = i % 14;
      var yMultiple = Math.floor(i / 14);
      var x = 29 * xMultiple + 61;
      var y = 29 * yMultiple + 61;
      var colour = whichColour(yMultiple, "green");
      bricks.push(new Brick({ x, y }, colour));
    }
    return bricks;
  }
  filterBricks() {
    var self = this;
    this.bricks = this.bricks.filter(function(brick) {
      return !self.collisions.brickHit(brick);
    });
  }
  update() {
    this.filterBricks();
    this.player.update(this.ball);
    this.collisions.brickCollision(this.bricks);
    this.ball.update(this.collisions);
    this.collisions.bricks = this.bricks;
  }
  draw() {
    this.drawRect(this.player, this.ball);
  }
  play() {
    this.update();
    this.draw();
  }

  playGame() {
    var self = this;
    requestAnimationFrame(function render() {
      self.play();
      requestAnimationFrame(render);
    });
  }
}
