let snake;
let food;
let resolution = 20;
let w;
let h;
var score = 0;
var grassBgImg;
var gameOverImg;

function preload() {
  grassBgImg = loadImage('images/grassImg.jpg');
  gameOverImg = loadImage('images/gameOverImg.png');
}
function setup() {
  canvas = createCanvas(400, 400);
  w = floor(width / resolution);
  h = floor(height / resolution);
  frameRate(10);
  snake = new Snake();

  foodLocation();

  textSize(15);
}
function keyPressed() {
  if (keyCode === UP_ARROW) {
    snake.setDir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    snake.setDir(0, 1);
  } else if (keyCode === RIGHT_ARROW) {
    snake.setDir(1, 0);
  } else if (keyCode === LEFT_ARROW) {
    snake.setDir(-1, 0);
  }
}
function foodLocation() {
  let x = floor(random(w));
  let y = floor(random(h));
  food = createVector(x, y);
}

function foodRemove() {
  food.destroy();
}

function draw() {
  //   background(0, 250, 97);
  background(grassBgImg);
  scale(resolution);
  if (snake.eat(food)) {
    foodLocation();
    score = score + 1;
    console.log('SCORE' + ':' + score);
  }
  snake.update();
  snake.display();

  if (snake.endGame()) {
    noLoop();
    background(gameOverImg);
    print('Your score is' + ':' + score);
    print('Try again!');
    foodRemove();
  }
  noStroke();
  fill(255, 0, 0);
  rect(food.x, food.y, 1, 1);
  text('Score' + ':' + score, 200, 200);
}
