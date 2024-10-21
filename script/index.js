const canvas = document.getElementById("canvas");
const score = document.querySelector("#score");
const ctx = canvas.getContext("2d");


const scale = 20;

const snake = [];

let row = canvas.height/scale;
let col = canvas.width/scale;


snake[0] = {
   x: Math.floor(Math.random() * col) * scale,
   y: Math.floor(Math.random() * row) * scale
 };


 let food = {
  x: Math.floor(Math.random() * col) * scale,
  y: Math.floor(Math.random() * row) * scale
 };


 let playGame = setInterval(draw, 100);
 let direction = "right";

 document.onkeydown = arrowd;

 function arrowd( event ){
  let key = event.keyCode;
  if(key == 37 && direction != "right"){
     direction = "left";
  }
  else if(key == 38 &&  direction != "down"){
     direction = "up";
  }

  else if(key == 39 &&  direction != "left"){
     direction = "right";
  }

  else if(key == 40 &&  direction != "up"){
     direction = "down";
  }
 }

 function draw(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  for(let i = 0 ;i<snake.length ;i++){
    ctx.fillStyle = "#fff";
    ctx.strokeStyle = "blue";
    ctx.fillRect(snake[i].x,snake[i].y,scale,scale);
    ctx.strokeRect(snake[i].x,snake[i].y,scale,scale);
  }
    ctx.fillStyle = "yellow";
    ctx.strokeStyle = "blue";
    ctx.fillRect(food.x,food.y,scale,scale);
    ctx.strokeRect(food.x,food.y,scale,scale);
    
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(direction == "left") snakeX -= scale; 
    if(direction == "right") snakeX += scale; 
    if(direction == "up") snakeY -= scale; 
    if(direction == "down") snakeY += scale; 

    if(snakeX > canvas.width){
        snakeX = 0;
    }

    if(snakeY > canvas.height){
      snakeY = 0;
    }

    if(snakeY > canvas.height){
      snakeY = 0;
    }

    if(snakeX < 0){
      snakeX = canvas.width;
    }

    if(snakeY < 0){
      snakeY = canvas.height;
    }

    let newHead = {
      x: snakeX,
      y: snakeY
    }

    if(food.x == snakeX && food.y == snakeY){
         food = {
          x: Math.floor(Math.random() * col) * scale,
          y: Math.floor(Math.random() * row) * scale,
         }
    }
    else {
      snake.pop();
    }
    snake.unshift(newHead);
    
 }

/* 

const canvas = document.getElementById("canvas");
const scoreElement = document.querySelector("#score");
const ctx = canvas.getContext("2d");

const scale = 20;
const UP = 38;
const DOWN = 40;
const LEFT = 37;
const RIGHT = 39;

const snake = [];
let row = canvas.height / scale;
let col = canvas.width / scale;

snake[0] = {
  x: Math.floor(Math.random() * col) * scale,
  y: Math.floor(Math.random() * row) * scale
};

let food = {
  x: Math.floor(Math.random() * col) * scale,
  y: Math.floor(Math.random() * row) * scale
};

let score = 0;
scoreElement.textContent = `Score: ${score}`;

let playGame = setInterval(draw, 100);
let direction = "right";

document.onkeydown = arrowd;

function arrowd(event) {
  switch (event.keyCode) {
    case LEFT:
      if (direction !== "right") direction = "left";
      break;
    case UP:
      if (direction !== "down") direction = "up";
      break;
    case RIGHT:
      if (direction !== "left") direction = "right";
      break;
    case DOWN:
      if (direction !== "up") direction = "down";
      break;
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw grass background
  ctx.fillStyle = "#32CD32";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Draw food (apple)
  ctx.fillStyle = "red";
  ctx.beginPath();
  ctx.arc(food.x + scale / 2, food.y + scale / 2, scale / 2, 0, 2 * Math.PI);
  ctx.fill();

  let newX = snake[0].x;
  let newY = snake[0].y;

  switch (direction) {
    case "left":
      newX -= scale;
      break;
    case "right":
      newX += scale;
      break;
    case "up":
      newY -= scale;
      break;
    case "down":
      newY += scale;
      break;
  }

  newX = (newX + canvas.width) % canvas.width;
  newY = (newY + canvas.height) % canvas.height;

  const newHead = { x: newX, y: newY };

  if (checkCollision(newHead, food)) {
    food = generateNewFood();
    score++;
    scoreElement.textContent = `Score: ${score}`;
  } else {
    snake.pop();
  }

  snake.unshift(newHead);

  // Draw snake body
  for (let i = 0; i < snake.length; i++) {
    let radius = scale / 2;
    let x = snake[i].x + radius;
    let y = snake[i].y + radius;

    ctx.fillStyle = "#228B22"; // Dark green for snake body
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fill();

    // Draw snake eyes
    if (i === 0) {
      ctx.fillStyle = "black";
      ctx.beginPath();
      ctx.arc(x - radius / 2, y - radius / 2, radius / 5, 0, 2 * Math.PI);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(x + radius / 2, y - radius / 2, radius / 5, 0, 2 * Math.PI);
      ctx.fill();
    }
  }
}

function checkCollision(head, food) {
  return head.x === food.x && head.y === food.y;
}

function generateNewFood() {
  let newFood;
  do {
    newFood = {
      x: Math.floor(Math.random() * col) * scale,
      y: Math.floor(Math.random() * row) * scale
    };
  } while (snake.some(part => part.x === newFood.x && part.y === newFood.y));
  return newFood;
}
 */
 




