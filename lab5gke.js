let speedX;
let x;
let directionX;
let speedY;
let y;
let directionY;

function setup() {
  createCanvas(400, 400);
  speedX = 2;
  speedY = 2;
  directionX = 1;
  directionY = 1;
  //x = width/3;
  //y = width/2;
  x = random(70, 330)
  y = random(70, 330)
}

function draw() {
  background(220);
  
  x += speedX * directionX;
  y += speedY * directionY;
  drawSprite(x, y, 0.2)
  
  //condition: speedX > width
  // action: speedX = 0;
  if (x + 70 >= width || x < -10){ // check if hits the right edge
    directionX *= -1;}
    
  if (y + 70 >= width || y < -10){ // check if hits the right edge
    directionY *= -1;
  }
  
  //   console.log("The value of directionX is : " + directionX)
  // console.log("The value of x is : " + x)
  console.log("The value of speedX is " + x);
  
}

function drawSprite(x, y, size) {
  push();
  translate(x, y);
  scale(size);
  stroke(255, 0, 0);
  strokeWeight(3);
  beginShape();
  vertex(200, 50);
  bezierVertex(250, 0, 350, 50, 350, 150);
  bezierVertex(350, 250, 200, 350, 200, 350);
  bezierVertex(200, 350, 50, 250, 50, 150);
  bezierVertex(50, 50, 150, 0, 200, 50);
  endShape(CLOSE);
  pop();
}

function keyPressed(){
  
      if (keyCode == UP_ARROW){
    directionY = 1;}
    if (keyCode == DOWN_ARROW){
    directionY = -1;
  }
}

